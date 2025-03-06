import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import {routerABI} from "./src/contracts/RouterABI";

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'router',
      abi: routerABI,
    },
  ],
  plugins: [
    react(),
  ],
})