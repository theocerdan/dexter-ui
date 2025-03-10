import {Address} from "viem";
import {
    useReadPairReserveA,
    useReadPairReserveB,
    useReadPairShares,
    useReadPairTokenA,
    useReadPairTokenB, useReadPairTotalFeesA,
    useReadPairTotalFeesB,
    useReadPairTotalShares
} from "../generated.ts";

const useLiquidityPoolInformations = (pair: Address, client: Address) => {

    const { data: tokenA } = useReadPairTokenA({ address: pair });
    const { data: tokenB } = useReadPairTokenB({ address: pair });
    const { data: reserveA } = useReadPairReserveA({ address: pair });
    const { data: reserveB } = useReadPairReserveB({ address: pair });
    const { data: totalFeesA } = useReadPairTotalFeesA({ address: pair });
    const { data: totalFeesB } = useReadPairTotalFeesB({ address: pair });
    const { data: shares } = useReadPairShares({ address: pair, args: [client] });
    const { data: totalShares } = useReadPairTotalShares({ address: pair });

    return { tokenA: tokenA, tokenB: tokenB, reserveA: reserveA, reserveB: reserveB, totalFeesB: totalFeesB, totalFeesA: totalFeesA, shares: shares, totalShares: totalShares };
}


export default useLiquidityPoolInformations;