import {GroupBox, Window, WindowContent, WindowHeader} from "react95";
import {useQuery} from "@tanstack/react-query";
import {getAllLiquidityPool, LiquidityPool} from "../repository/LiquidityPoolRepository.ts";
import {useAccount} from "wagmi";
import {Address} from "viem";
import AllowanceLiquidityPool from "./AllowanceLiquidityPool.tsx";
import DepositLiquidityPool from "./DepositLiquidityPool.tsx";
import useAllowed from "../hooks/useAllowed.tsx";
import useLiquidityPoolInformations from "../hooks/useLiquidityPoolInformations.tsx";

const LiquidityPools = () => {


    const { data: lp, isLoading} = useQuery(({ queryKey: ['todos'], queryFn: getAllLiquidityPool }));
    const { address } = useAccount();

    return (
        <GroupBox label='Liquidity Pools' style={{display: 'flex', padding: 30, flexDirection: 'row', gap: 10 }}>
            {isLoading && 'Loading...'}
            {address && lp && lp.map((data: LiquidityPool) => <LiquidityPoolCard key={data.pair} data={data} address={address} />)}
        </GroupBox>
    )
}

const LiquidityPoolCard = ({ data, address }: { data: LiquidityPool, address: Address }) => {

    const { allowed: canSwap, refetch: refetchAllowance } = useAllowed(data.tokenA, data.tokenB, address, data.pair);
    const { reserveA, reserveB, shares, totalShares, refetch: refetchLpInformations } = useLiquidityPoolInformations(data.pair, address);

    const handleLpInteraction = () => {
        refetchLpInformations();
        refetchAllowance();
    }

    return (
        <Window style={{width: '400px'}}>
            <WindowHeader>
                {data.tokenASymbol} - {data.tokenBSymbol}
            </WindowHeader>
            <WindowContent style={{display: "flex", flexDirection: 'column', gap: 7}}>
                Total shares : {totalShares}
                <br/>
                Your shares : {shares}
                <br/>
                Reserve of {data.tokenASymbol} : {reserveA} {data.tokenASymbol}
                <br/>
                Reserve of {data.tokenBSymbol} : {reserveB} {data.tokenBSymbol}
                <div style={{display: 'flex', justifyContent: 'space-between', gap: 7}}>
                    {canSwap && shares != undefined ?
                        <DepositLiquidityPool data={data} onAddLiquidity={handleLpInteraction} onRemoveLiquidity={handleLpInteraction} shares={shares} /> :
                        <AllowanceLiquidityPool data={data} owner={address} onApprove={handleLpInteraction}/>}
                </div>
                Pair - {data.pair}
                <br/>
                {data.tokenASymbol} - {data.tokenA}
                <br/>
                {data.tokenBSymbol} - {data.tokenB}
            </WindowContent>
        </Window>
    )
}


export default LiquidityPools;