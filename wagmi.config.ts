import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import {routerABI} from "./src/contracts/RouterABI";
import {pairABI} from "./src/contracts/PairABI";
import {erc20Abi} from "viem";

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
  ],
  plugins: [
    react(),
  ],
})