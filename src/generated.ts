import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// router
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const routerAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenA',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenB',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'pair',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewPair',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'allPairs',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
    ],
    name: 'createPair',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'getPair',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__
 */
export const useReadRouter = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"allPairs"`
 */
export const useReadRouterAllPairs = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  functionName: 'allPairs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"getPair"`
 */
export const useReadRouterGetPair = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  functionName: 'getPair',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadRouterOwner = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__
 */
export const useWriteRouter = /*#__PURE__*/ createUseWriteContract({
  abi: routerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"createPair"`
 */
export const useWriteRouterCreatePair = /*#__PURE__*/ createUseWriteContract({
  abi: routerAbi,
  functionName: 'createPair',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteRouterRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteRouterTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__
 */
export const useSimulateRouter = /*#__PURE__*/ createUseSimulateContract({
  abi: routerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"createPair"`
 */
export const useSimulateRouterCreatePair =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    functionName: 'createPair',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateRouterRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateRouterTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link routerAbi}__
 */
export const useWatchRouterEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: routerAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link routerAbi}__ and `eventName` set to `"NewPair"`
 */
export const useWatchRouterNewPairEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: routerAbi,
    eventName: 'NewPair',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link routerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchRouterOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: routerAbi,
    eventName: 'OwnershipTransferred',
  })
