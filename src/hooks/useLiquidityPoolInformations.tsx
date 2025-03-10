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
import {useQueryClient} from "@tanstack/react-query";

const useLiquidityPoolInformations = (pair: Address, client: Address) => {

    const queryClient = useQueryClient();

    const { data: tokenA } = useReadPairTokenA({ address: pair });
    const { data: tokenB } = useReadPairTokenB({ address: pair });
    const { data: reserveA, queryKey: reserveAQk } = useReadPairReserveA({ address: pair });
    const { data: reserveB, queryKey: reserveBQk } = useReadPairReserveB({ address: pair });
    const { data: totalFeesA } = useReadPairTotalFeesA({ address: pair });
    const { data: totalFeesB } = useReadPairTotalFeesB({ address: pair });
    const { data: shares, queryKey: sharesQk } = useReadPairShares({ address: pair, args: [client] });
    const { data: totalShares, queryKey: totalSharesQk } = useReadPairTotalShares({ address: pair });

    const refetch = () => {
        queryClient.invalidateQueries({ queryKey: reserveAQk });
        queryClient.invalidateQueries({ queryKey: reserveBQk });
        queryClient.invalidateQueries({ queryKey: sharesQk });
        queryClient.invalidateQueries({ queryKey: totalSharesQk });
    }
    return { tokenA: tokenA, tokenB: tokenB, reserveA: reserveA, reserveB: reserveB, totalFeesB: totalFeesB, totalFeesA: totalFeesA, shares: shares, totalShares: totalShares, refetch: refetch };
}


export default useLiquidityPoolInformations;