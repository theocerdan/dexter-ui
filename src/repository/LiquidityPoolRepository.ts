// get LP
import { routerABI } from "../contracts/RouterABI.ts";
import { publicClient} from "../config.ts";
import {getSymbol} from "./ERC20Repository.ts";
import {ROUTER_ADDRESS} from "../address.tsx";
import {Address} from "viem";

export type LiquidityPool = {
    pair: Address,
    tokenA: Address,
    tokenB: Address,
    tokenASymbol: string,
    tokenBSymbol: string,
}
export const getAllLiquidityPool = async (): Promise<LiquidityPool[]> => {

    const lp = await publicClient.getContractEvents({
        address: ROUTER_ADDRESS,
        abi: routerABI,
        eventName: "NewPair",
        fromBlock: "earliest",
        toBlock: "latest",
    }).then((t) => {
        return t.map((e) => {
            return {
                pair: e.args.pair as Address,
                tokenA: e.args.tokenA as Address,
                tokenB: e.args.tokenB as Address,
                tokenASymbol: "",
                tokenBSymbol: "",
            }
        });
    })

    // get symbols
    await Promise.all(
        lp.map(async (e) => {
            e.tokenASymbol = await getSymbol(e.tokenA);
            e.tokenBSymbol = await getSymbol(e.tokenB);
        })
    );
    return lp;
}