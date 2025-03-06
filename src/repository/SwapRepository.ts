//swap
// get balance

import {config} from "../config.ts";
import { getBalance } from '@wagmi/core'

const getTokenBalance = async (address: string, token: string) => {
    return getBalance(config, {
        address: address as `0x${string}`,
        token: token as `0x${string}`,
    })
}

const getAvailableCoin = (): Token[] => {
    return [{symbol: 'WETH', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'}, { symbol: 'USDT', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7'}];
}

const getAmoutOut = async (amountIn: number, tokenIn: Token, tokenOut: Token) => {
    return Math.random() * (1000 - 1) + 1;
}

export type Token = {
    symbol: string;
    address: string;
}

export { getTokenBalance, getAvailableCoin, getAmoutOut }