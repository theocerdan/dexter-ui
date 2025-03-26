import {GroupBox, Separator, Window, WindowContent, WindowHeader} from "react95";
import {useQuery} from "@tanstack/react-query";
import {getAllLiquidityPool} from "../repository/LiquidityPoolRepository.ts";
import {useAccount} from "wagmi";
import {Address} from "viem";
import AllowanceLiquidityPool from "./AllowanceLiquidityPool.tsx";
import DepositLiquidityPool from "./DepositLiquidityPool.tsx";
import useAllowed from "../hooks/useAllowed.tsx";
import useLiquidityPoolInformations from "../hooks/useLiquidityPoolInformations.tsx";
import {LiquidityPool} from "../repository/types";
import {formatFixedDecimals} from "../helpers/formatFixedUnits.ts";

const LiquidityPools = () => {


    const { data: lp, isLoading} = useQuery(({ queryKey: ['todos'], queryFn: getAllLiquidityPool }));
    const { address } = useAccount();

    return (
        <GroupBox label='Liquidity Pools' style={{display: 'flex', padding: 30, flexDirection: 'row', gap: 10 }}>
            {isLoading && 'Loading...'}
            {address && lp && <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                {lp.map((data: LiquidityPool) => <LiquidityPoolCard key={data.pair} data={data} address={address}/>)}
            </div>}
        </GroupBox>
    )
}

const LiquidityPoolCard = ({ data, address }: { data: LiquidityPool, address: Address }) => {

    const { allowed: canSwap, refetch: refetchAllowance } = useAllowed(data.tokenA.address, data.tokenB.address, address, data.pair);
    const { reserveA, reserveB, shares, totalShares, refetch: refetchLpInformations } = useLiquidityPoolInformations(data.pair, address);

    const handleLpInteraction = () => {
        refetchLpInformations();
        refetchAllowance();
    }

    return (
        <Window style={{width: '400px'}}>
            <WindowHeader>
                {data.tokenA.symbol} - {data.tokenB.symbol}
            </WindowHeader>
            <WindowContent style={{display: "flex", flexDirection: 'column', gap: 20}}>
                Pair - {data.pair}
                <br/>
                {data.tokenA.symbol} - {data.tokenA.address}
                <br/>
                {data.tokenB.symbol} - {data.tokenB.address}
                <Separator orientation='horizontal'/>
                {totalShares != undefined && <>Total shares : {formatFixedDecimals(totalShares, 18)}</>}
                <br/>
                {shares != undefined && <>Your shares : {formatFixedDecimals(shares, 18)}</>}
                <br/>
                Reserve
                of {data.tokenA.symbol} : {formatFixedDecimals(reserveA || 0n, data.tokenA.decimals)} {data.tokenA.symbol}
                <br/>
                Reserve
                of {data.tokenB.symbol} : {formatFixedDecimals(reserveB || 0n, data.tokenB.decimals)} {data.tokenB.symbol}
                <Separator orientation='horizontal'/>
                <div style={{display: 'flex', justifyContent: 'space-between', gap: 7}}>
                    {canSwap && shares != undefined ?
                        <DepositLiquidityPool data={data} onAddLiquidity={handleLpInteraction}
                                              onRemoveLiquidity={handleLpInteraction} shares={shares}/> :
                        <AllowanceLiquidityPool data={data} owner={address} onApprove={handleLpInteraction}/>}
                </div>
            </WindowContent>
        </Window>
    )
}


export default LiquidityPools;