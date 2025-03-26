import {http, createConfig, injected} from 'wagmi'
import {hardhat, sepolia} from 'wagmi/chains'
import { getPublicClient } from '@wagmi/core'

export const config = createConfig({
    chains: [hardhat],
    connectors: [injected()],
    transports: {
        [sepolia.id]: http(),
        [hardhat.id]: http(),
    },
})


export const publicClient = getPublicClient(config)
