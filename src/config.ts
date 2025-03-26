import {http, createConfig, injected} from 'wagmi'
import {hardhat, sepolia} from 'wagmi/chains'
import { getPublicClient } from '@wagmi/core'

export const config = import.meta.env.DEV ? createConfig({
    chains: [hardhat],
    connectors: [injected()],
    transports: {
        [hardhat.id]: http(),
    },
}) : createConfig({
    chains: [sepolia],
    connectors: [injected()],
    transports: {
        [sepolia.id]: http(),
    },
})


export const publicClient = getPublicClient(config)
