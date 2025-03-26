// get LP
import { routerABI } from "../contracts/RouterABI.ts";
import { publicClient} from "../config.ts";
import {LOG_DEPTH, ROUTER_ADDRESS} from "../address.tsx";
import {LiquidityPool} from "./types";
import {Address} from "viem";
import {getToken} from "./ERC20Repository.ts";


export const getAllLiquidityPool = async (): Promise<LiquidityPool[]> => {

    const latestBlock = await publicClient.getBlockNumber();

    const logs = await publicClient.getContractEvents({
        address: ROUTER_ADDRESS,
        abi: routerABI,
        eventName: "NewPair",
        fromBlock: latestBlock - LOG_DEPTH,
        toBlock: "latest",
    });

    const lp: { pair: Address, tokenA: Address, tokenB: Address }[] = logs.map((e) => {
        return {
            pair: e.args.pair as Address,
            tokenA: e.args.tokenA as Address,
            tokenB: e.args.tokenB as Address,
        }
    }).filter(Boolean);

    return Promise.all(lp.map(async (e) => {
        return {
            pair: e.pair,
            tokenA: await getToken(e.tokenA),
            tokenB: await getToken(e.tokenB),
        }
    }));


}