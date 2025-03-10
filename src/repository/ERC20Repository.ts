import {Address, erc20Abi} from "viem";
import {publicClient} from "../config.ts";

export const getSymbol = async (address: Address) => {
    return await publicClient.readContract({
        address: address as `0x${string}`,
        abi: erc20Abi,
        functionName: 'symbol',
        args: []
    })
}