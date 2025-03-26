import {formatUnits} from "viem";

export const formatFixedDecimals = (value: bigint, decimals: number) => {
    return Number(formatUnits(value, decimals)).toFixed(2);
}