import {Button, GroupBox, NumberInput, Select, TextInput} from "react95";
import {useEffect, useState} from "react";
import { getAvailableCoin, Token} from "./repository/SwapRepository.ts";
import { useSwapStore } from "./store/SwapStore.ts";
import {SelectOption} from "react95/dist/Select/Select.types";
import {useAccount, useBalance} from "wagmi";
import {formatEther} from "viem";
import {useReadRouterAllPairs } from "./generated.ts";

const Swap = () => {

    const { address } = useAccount();
    const result = useBalance({
        address: address as `0x${string}`,
        unit: 'ether',
    });

    const { data, isError, isLoading, error } = useReadRouterAllPairs({
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        args: [0],
    });


    const [tokens, setTokens] = useState<Token[]>([]);

    useEffect(() => {
        setTokens(getAvailableCoin());
    }, []);

    const { amountIn, amountOut, setTokenOut, setTokenIn, tokenIn, tokenOut, setAmountIn, getAmountOut } = useSwapStore();

    const swap = async () => {
        console.log("=================")
        console.log("Swap")
        console.log('Swap from ', amountIn, " ", tokenIn?.symbol, " to ", await amountOut.toString(), " ", tokenOut?.symbol)
        console.log("=================")
    }

    const getQuote = () => {
        getAmountOut();
    }

    const canSwap= tokenIn != null && tokenOut != null && amountIn > 0;

    const onTokenAmountInChange = (token: Token, amount: number) => {
        setTokenIn(token);
        setAmountIn(amount);
    }

    const onTokenAmountOutChange = (token: Token) => {
        setTokenOut(token);
    }

    useEffect(() => {
        getQuote();
    }, [amountIn, tokenIn, tokenOut]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <GroupBox label='Swap' style={{ justifyContent: 'center', padding: 30, flexDirection: 'row', gap: 10 }}>
            {data}
            {isError && <p>Error fetching balance</p>}
            {isLoading && <p>Loading...</p>}
            {result && result.data ? <p>Balance: {formatEther(result.data.value)} {result.data.symbol}</p> : <p>Loading...</p>}
            <div style={{display: 'flex', gap: 10, flexDirection: "column"}}>
                <div style={{display: 'flex', gap: 10}}>
                    <TokenAmountIn tokens={tokens} onChange={onTokenAmountInChange}/>
                    <h1 style={{display: 'flex', alignItems: 'center'}}>to</h1>
                    <TokenAmountOut tokens={tokens} onChange={onTokenAmountOutChange} amount={amountOut} />
                </div>
                <Button size='lg' fullWidth onClick={swap} disabled={!canSwap}>Swap</Button>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>1 ETH = XXX USD: </p>
                    <p>1 USD = XXX ETH: </p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>Network fees: 0.05 ETH</p>
                    <p>Swap fees: 0.05 ETH</p>
                </div>
            </div>
        </GroupBox>
    )
}

const TokenAmountIn = ({ tokens, onChange }: { tokens: Token[], onChange?: (token: Token, amount: number) => void }) => {
    const [options, setOptions] = useState<{ label: string; value: string; }[]>([]);
    const [token, setToken] = useState<Token>();
    const [amount, setAmount] = useState<number>(0);


    useEffect(() => {
        setOptions(tokens.map((token) => ({ label: token.symbol, value: token.address })));
    }, [tokens]);

    const handleTokenChange = (e: SelectOption<string>) => {
        const t: Token | undefined = tokens.find((token) => token.address === e.value);
        setToken(t);
    }

    const handleAmountChange = (e: number) => {
        setAmount(e);
    }

    useEffect(() => {
        if (onChange) onChange(token as Token, amount);
    }, [token, amount]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
            {options.length != 0 && <Select options={options} onChange={handleTokenChange}/>}
            <div>
                <NumberInput defaultValue={0} step={0.1} onChange={handleAmountChange} />
            </div>
        </div>
    )
}

const TokenAmountOut = ({ tokens, onChange, amount }: { tokens: Token[], onChange?: (token: Token) => void, amount: number }) => {
    const [options, setOptions] = useState<{ label: string; value: string; }[]>([]);
    const [token, setToken] = useState<Token>();


    useEffect(() => {
        setOptions(tokens.map((token) => ({ label: token.symbol, value: token.address })));
    }, [tokens]);

    const handleTokenChange = (e: SelectOption<string>) => {
        const t: Token | undefined = tokens.find((token) => token.address === e.value);
        setToken(t);
    }

    useEffect(() => {
        if (onChange) onChange(token as Token);
    }, [token]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
            {options.length != 0 && <Select options={options} onChange={handleTokenChange}/>}
            <div>
                <TextInput value={amount} />
            </div>
        </div>
    )
}

export default Swap;