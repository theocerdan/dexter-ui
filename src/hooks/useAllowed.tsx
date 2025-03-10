import {Address} from "viem";
import {useReadErc20Allowance} from "../generated.ts";
import {useEffect, useState} from "react";
import {useBlockNumber} from "wagmi";
import {useQueryClient} from "@tanstack/react-query";

const useAllowed = (tokenA: Address, tokenB: Address, owner: Address, pair: Address) => {

    const queryClient = useQueryClient();

    const { data: blockNumber } = useBlockNumber({ watch: true });
    const { data: allowanceTokenA, queryKey: queryTokenA } = useReadErc20Allowance({ address: tokenA, args: [owner, pair] });
    const { data: allowanceTokenB, queryKey: queryTokenB } = useReadErc20Allowance({ address: tokenB, args: [owner, pair] });

    const [allowed, setAllowed] = useState<boolean>(false);


    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: queryTokenB });
        queryClient.invalidateQueries({ queryKey: queryTokenA });
    }, [blockNumber])


    useEffect(() => {
        if (allowanceTokenA == undefined || allowanceTokenB == undefined) {
            return;
        }
        if (allowanceTokenA > 0 && allowanceTokenB > 0) {
            setAllowed(true);
        }
    }, [allowanceTokenB, allowanceTokenA]);


    return allowed;
}

export default useAllowed;