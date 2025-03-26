import {useReadPairGetQuote, useReadRouterGetPair} from "../generated.ts";
import {ROUTER_ADDRESS} from "../address.tsx";
import {Token} from "../repository/types";
import { parseUnits} from "viem";
import {formatFixedDecimals} from "../helpers/formatFixedUnits.ts";

export const useGetQuote = (tokenIn: Token, tokenOut: Token, amountIn: number) => {
    const pairAddress = useReadRouterGetPair({ address: ROUTER_ADDRESS, args: [tokenIn.address, tokenOut.address] });
    const quote = useReadPairGetQuote({ address: pairAddress.data, args: [tokenIn.address, parseUnits(amountIn.toString(), tokenIn.decimals)] });

    const returnQuote = quote.data == undefined ? null : formatFixedDecimals(quote.data, tokenOut.decimals);

    return { quote: returnQuote, pairAddress: pairAddress.data};
}