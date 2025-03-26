import {getAllLiquidityPool} from "./LiquidityPoolRepository.ts";
import {USDT_ADDRESS, WETH_ADDRESS} from "../address.tsx";
import {Token} from "./types";

const getAvailableCoin = async (): Promise<Token[]> => {
    const lp = await getAllLiquidityPool();

    const tokens: Token[] = [];

    lp.forEach((e) => {
        tokens.push(e.tokenA);
        tokens.push(e.tokenB);
    });

    tokens.push({ symbol: "USDT 🦄", address: USDT_ADDRESS, decimals: 6 });
    tokens.push({ symbol: "WETH 🦄", address: WETH_ADDRESS, decimals: 18 });

    return tokens.filter((e, i) => {
        return tokens.findIndex((t) => t.symbol === e.symbol) === i;
    });
}

export { getAvailableCoin };