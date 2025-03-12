import {Button, GroupBox} from "react95";
import {useTokenInSelector, useTokenOutSelector} from "./components/TokenSelector.tsx";
import {useQuery} from "@tanstack/react-query";
import {getAvailableCoin, Token} from "./repository/SwapRepository.ts";
import {toast} from "react-toastify";
import {useWriteErc20Approve, useWriteRouterSwapToken} from "./generated.ts";
import {ROUTER_ADDRESS} from "./address.tsx";
import {Address, maxInt256} from "viem";
import {useAccount} from "wagmi";

const SwapBox = () => {

    const { data: availableCoins, isSuccess } = useQuery({ queryKey: ['getAvailableCoin'], queryFn: getAvailableCoin});

    return (
        <GroupBox label='Swap' style={{ justifyContent: 'center', padding: 30, flexDirection: 'row', gap: 10 }}>
            {isSuccess && <Swap availableCoins={availableCoins}/>}
        </GroupBox>
    )
}

const Swap = ({ availableCoins }: { availableCoins: Token[] }) => {

    const { address } = useAccount();
    const { component: tokenInSelector, token: tokenIn, amount: amountIn } = useTokenInSelector(availableCoins);
    const { component: tokenOutSelector, token: tokenOut, quote: amountOut } = useTokenOutSelector(availableCoins, tokenIn, amountIn);
    const { writeContract: approveToken } = useWriteErc20Approve({
        mutation: {
            onSuccess: () => {
                toast("Approved");
            },
            onError: (e) => {
                toast(e.message);
            }
        }
    });

    const { writeContract: swap } = useWriteRouterSwapToken({ mutation: {
        onError: (e) => {
            toast(e.message);
            toast(e.name);
        }
    }});


    const handleSwap = () => {
        approveToken({ address: tokenIn.address, args: [ROUTER_ADDRESS, maxInt256] });

        swap({ address: ROUTER_ADDRESS, args: [address as Address, tokenIn.address, tokenOut.address, BigInt(amountIn)] });
        toast('Swap completed ' + amountIn + ' ' + tokenIn.symbol + ' to ' + tokenOut.symbol);
    }

    return (
            <div style={{display: 'flex', gap: 10, flexDirection: "column"}}>
                <div style={{display: 'flex', gap: 10}}>
                    {tokenInSelector}
                    <h1 style={{display: 'flex', alignItems: 'center'}}>to</h1>
                    {tokenOutSelector}
                </div>
                <Button size='lg' fullWidth onClick={handleSwap}>Swap</Button>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    {amountOut != undefined && <p>1 {tokenIn.symbol} = {Number(amountOut) / amountIn} {tokenOut.symbol}</p>}
                    {amountOut != undefined && <p>1 {tokenOut.symbol} = {amountIn / Number(amountOut)} {tokenIn.symbol}</p>}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>Network fees: 0.05 ETH</p>
                    <p>Swap fees: 0.05 ETH</p>
                </div>
            </div>
    )
}


export default SwapBox;