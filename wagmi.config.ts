import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import {routerABI} from "./src/contracts/RouterABI";
import {pairABI} from "./src/contracts/PairABI";
import {erc20Abi} from "viem";
import {uniswapRouter02ABI} from "./src/contracts/UniswapRouter02ABI";

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'router',
      abi: routerABI,
    },
    {
      name: 'pair',
      abi: pairABI,
    },
    {
      name: 'erc20',
      abi: erc20Abi,
    },
    {
      name: 'uniswapRouter',
      abi: uniswapRouter02ABI,
    },
  ],
  plugins: [
    react(),
  ],
})