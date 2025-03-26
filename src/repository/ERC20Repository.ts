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

export const getDecimals = async (address: Address) => {
    return await publicClient.readContract({
        address: address as `0x${string}`,
        abi: erc20Abi,
        functionName: 'decimals',
        args: []
    })
}

export const getToken = async (address: Address) => {
    const symbol = await getSymbol(address);
    const decimals = await getDecimals(address);
    return { symbol, address, decimals };
}