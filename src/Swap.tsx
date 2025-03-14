import { GroupBox} from "react95";
import {useTokenInSelector, useTokenOutSelector} from "./components/TokenSelector.tsx";
import {useQuery} from "@tanstack/react-query";
import {getAvailableCoin, Token} from "./repository/SwapRepository.ts";
import {useReadRouterGetPair} from "./generated.ts";
import {ROUTER_ADDRESS} from "./address.tsx";
import SwapButton from "./components/SwapButton.tsx";
import {useAccount} from "wagmi";
import {Address, zeroAddress} from "viem";
import UniswapSwapButton from "./components/UniswapSwapButton.tsx";

const SwapBox = () => {

    const { data: availableCoins, isSuccess } = useQuery({ queryKey: ['getAvailableCoin'], queryFn: getAvailableCoin});

    return (
        <GroupBox label='Swap' style={{ justifyContent: 'center', padding: 30, flexDirection: 'row', gap: 10 }}>
            {isSuccess && <Swap availableCoins={availableCoins}/>}
        </GroupBox>
    )
}

const Swap = ({ availableCoins }: { availableCoins: Token[] }) => {

    const { component: tokenInSelector, token: tokenIn, amount: amountIn } = useTokenInSelector(availableCoins);
    const { component: tokenOutSelector, token: tokenOut } = useTokenOutSelector(availableCoins);
    const pairAddress = useReadRouterGetPair({ address: ROUTER_ADDRESS, args: [tokenIn.address, tokenOut.address] });
    const { address } = useAccount();

    const isUniswapPair = (symbol: string) => {
        return symbol.includes("🦄");
    }

    return (
            <div style={{display: 'flex', gap: 10, flexDirection: "column"}}>
                <div style={{display: 'flex', gap: 10}}>
                    {tokenInSelector}
                    <h1 style={{display: 'flex', alignItems: 'center'}}>to</h1>
                    {tokenOutSelector}
                </div>
                {(pairAddress.data && pairAddress.data != zeroAddress) && <SwapButton account={address as Address} amountIn={amountIn} tokenIn={tokenIn} tokenOut={tokenOut} pairAddress={pairAddress.data}/>}
                {(isUniswapPair(tokenIn.symbol) && isUniswapPair(tokenOut.symbol)) && <UniswapSwapButton account={address as Address} amountIn={amountIn} tokenIn={tokenIn}
                                    tokenOut={tokenOut}/>}
            </div>
    )
}


export default SwapBox;