import {Address} from "viem";

export type LiquidityPool = {
    pair: Address,
    tokenA: Token,
    tokenB: Token,
}

export type Token = {
    symbol: string;
    address: Address;
    decimals: number;
}