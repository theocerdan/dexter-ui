import { GroupBox} from "react95";
import {useTokenInSelector, useTokenOutSelector} from "./components/TokenSelector.tsx";
import {useQuery} from "@tanstack/react-query";
import {getAvailableCoin, Token} from "./repository/SwapRepository.ts";
import {useReadRouterGetPair} from "./generated.ts";
import {ROUTER_ADDRESS} from "./address.tsx";
import SwapButton from "./components/SwapButton.tsx";
import {useAccount} from "wagmi";
import {Address} from "viem";

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

    return (
            <div style={{display: 'flex', gap: 10, flexDirection: "column"}}>
                <div style={{display: 'flex', gap: 10}}>
                    {tokenInSelector}
                    <h1 style={{display: 'flex', alignItems: 'center'}}>to</h1>
                    {tokenOutSelector}
                </div>
                {pairAddress.data && <SwapButton account={address as Address} amountIn={amountIn} tokenIn={tokenIn} tokenOut={tokenOut} pairAddress={pairAddress.data}/>}
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>Network fees: 0.05 ETH</p>
                    <p>Swap fees: 0.05 ETH</p>
                </div>
            </div>
    )
}


export default SwapBox;