import {GroupBox, Window, WindowContent, WindowHeader} from "react95";
import {useQuery} from "@tanstack/react-query";
import {getAllLiquidityPool} from "../repository/LiquidityPoolRepository.ts";
import {useAccount} from "wagmi";
import {Address, formatUnits} from "viem";
import AllowanceLiquidityPool from "./AllowanceLiquidityPool.tsx";
import DepositLiquidityPool from "./DepositLiquidityPool.tsx";
import useAllowed from "../hooks/useAllowed.tsx";
import useLiquidityPoolInformations from "../hooks/useLiquidityPoolInformations.tsx";
import {LiquidityPool} from "../repository/types";

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
            <WindowContent style={{display: "flex", flexDirection: 'column', gap: 7}}>
                Total shares : {totalShares}
                <br/>
                Your shares : {shares}
                <br/>
                Reserve of {data.tokenA.symbol} : {formatUnits(reserveA || 0n, data.tokenA.decimals)} {data.tokenA.symbol}
                <br/>
                Reserve of {data.tokenB.symbol} : {formatUnits(reserveB || 0n, data.tokenB.decimals)} {data.tokenB.symbol}
                <div style={{display: 'flex', justifyContent: 'space-between', gap: 7}}>
                    {canSwap && shares != undefined ?
                        <DepositLiquidityPool data={data} onAddLiquidity={handleLpInteraction} onRemoveLiquidity={handleLpInteraction} shares={shares} /> :
                        <AllowanceLiquidityPool data={data} owner={address} onApprove={handleLpInteraction}/>}
                </div>
                Pair - {data.pair}
                <br/>
                {data.tokenA.symbol} - {data.tokenA.address}
                <br/>
                {data.tokenB.symbol} - {data.tokenB.address}
            </WindowContent>
        </Window>
    )
}


export default LiquidityPools;