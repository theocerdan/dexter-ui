import {Address} from "viem";

console.log("Router address:", import.meta.env.VITE_ROUTER_ADDRESS);
export const ROUTER_ADDRESS: Address = import.meta.env.VITE_ROUTER_ADDRESS;
export const USDT_ADDRESS: Address = import.meta.env.VITE_USDT_ADDRESS;
export const WETH_ADDRESS: Address = import.meta.env.VITE_WETH_ADDRESS;
export const ZERO_ADDRESS: Address = '0x0000000000000000000000000000000000000000';
export const LOG_DEPTH = 10000n;