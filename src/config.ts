import {http, createConfig, injected} from 'wagmi'
import {hardhat} from 'wagmi/chains'
import { getPublicClient } from '@wagmi/core'

export const config = createConfig({
    chains: [hardhat],
    connectors: [injected()],
    transports: {
        [hardhat.id]: http(),
    },
})


export const publicClient = getPublicClient(config)
