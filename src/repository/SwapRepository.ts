//swap
// get balance

import {config} from "../config.ts";
import {getBalance} from '@wagmi/core'
import {getAllLiquidityPool} from "./LiquidityPoolRepository.ts";
import {Address} from "viem";

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

    tokens.push({ symbol: "USDT 🦄", address: "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0"});
    tokens.push({ symbol: "WETH 🦄", address: "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9"});

    return tokens.filter((e, i) => {
        return tokens.findIndex((t) => t.symbol === e.symbol) === i;
    });
}

export type Token = {
    symbol: string;
    address: Address;
}

export { getTokenBalance, getAvailableCoin };