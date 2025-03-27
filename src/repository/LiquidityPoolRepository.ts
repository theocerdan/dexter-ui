// get LP
import { routerABI } from "../contracts/RouterABI.ts";
import { publicClient} from "../config.ts";
import {LOG_DEPTH, ROUTER_ADDRESS} from "../address.tsx";
import {LiquidityPool} from "./types";
import {Address} from "viem";
import {getToken} from "./ERC20Repository.ts";


export const getAllLiquidityPool = async (): Promise<LiquidityPool[]> => {

    const latestBlock = await publicClient.getBlockNumber();

    let depth = 0n;
    let from = latestBlock;
    let to = latestBlock - LOG_DEPTH;
    let lp = [];

    while (true) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        lp = await fetchLiquidityPool(from, to);
        if (lp.length > 0) {
            break;
        }
        depth += LOG_DEPTH;
        from = latestBlock - LOG_DEPTH;
        to = latestBlock - LOG_DEPTH - depth;
    }

    return Promise.all(lp.map(async (e) => {
        return {
            pair: e.pair,
            tokenA: await getToken(e.tokenA),
            tokenB: await getToken(e.tokenB),
        }
    }));

}


const fetchLiquidityPool = async (from: bigint, to: bigint) => {

    const logs = await publicClient.getContractEvents({
        address: ROUTER_ADDRESS,
        abi: routerABI,
        eventName: "NewPair",
        fromBlock: to,
        toBlock: from,
    });

    const lp: { pair: Address, tokenA: Address, tokenB: Address }[] = logs.map((e) => {
        return {
            pair: e.args.pair as Address,
            tokenA: e.args.tokenA as Address,
            tokenB: e.args.tokenB as Address,
        }
    }).filter(Boolean);

    return lp;
}