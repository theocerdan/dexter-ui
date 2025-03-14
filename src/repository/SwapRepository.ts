//swap
// get balance

import {config} from "../config.ts";
import {getBalance} from '@wagmi/core'
import {getAllLiquidityPool} from "./LiquidityPoolRepository.ts";
import {Address} from "viem";
import {USDT_ADDRESS, WETH_ADDRESS} from "../address.tsx";

const getTokenBalance = async (address: string, token: string) => {
    return getBalance(config, {
        address: address as `0x${string}`,
        token: token as `0x${string}`,
    })
}

const getAvailableCoin = async (): Promise<Token[]> => {
    const lp = await getAllLiquidityPool();

    const tokens: Token[] = [];

    lp.forEach((e) => {
        tokens.push({ symbol: e.tokenASymbol, address: e.tokenA });
        tokens.push({ symbol: e.tokenBSymbol, address: e.tokenB });
    });

    tokens.push({ symbol: "USDT 🦄", address: USDT_ADDRESS});
    tokens.push({ symbol: "WETH 🦄", address: WETH_ADDRESS});

    return tokens.filter((e, i) => {
        return tokens.findIndex((t) => t.symbol === e.symbol) === i;
    });
}

export type Token = {
    symbol: string;
    address: Address;
}

export { getTokenBalance, getAvailableCoin };