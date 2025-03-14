import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// pair
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pairAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_tokenA', internalType: 'address', type: 'address' },
      { name: '_tokenB', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getQuote',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'liquidity', internalType: 'uint256', type: 'uint256' }],
    name: 'removeLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reserveA',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reserveB',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'shares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenA',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenB',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalFeesA',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalFeesB',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// router
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const routerAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
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
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapForwarding',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uniswapV2Router',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// uniswapRouter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const uniswapRouterAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_factory', internalType: 'address', type: 'address' },
      { name: '_WETH', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'WETH',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'amountADesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBDesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountTokenDesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidityETH',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveIn', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAmountIn',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveIn', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAmountOut',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'getAmountsIn',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'getAmountsOut',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveA', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quote',
    outputs: [{ name: 'amountB', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidityETH',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
    outputs: [{ name: 'amountETH', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityETHWithPermit',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
    outputs: [{ name: 'amountETH', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityWithPermit',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapETHForExactTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactETHForTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForETH',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMax', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapTokensForExactETH',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMax', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapTokensForExactTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__
 */
export const useReadPair = /*#__PURE__*/ createUseReadContract({ abi: pairAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"getQuote"`
 */
export const useReadPairGetQuote = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'getQuote',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserveA"`
 */
export const useReadPairReserveA = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'reserveA',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserveB"`
 */
export const useReadPairReserveB = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'reserveB',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"shares"`
 */
export const useReadPairShares = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'shares',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"tokenA"`
 */
export const useReadPairTokenA = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'tokenA',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"tokenB"`
 */
export const useReadPairTokenB = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'tokenB',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"totalFeesA"`
 */
export const useReadPairTotalFeesA = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'totalFeesA',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"totalFeesB"`
 */
export const useReadPairTotalFeesB = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'totalFeesB',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"totalShares"`
 */
export const useReadPairTotalShares = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'totalShares',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__
 */
export const useWritePair = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useWritePairAddLiquidity = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'addLiquidity',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const useWritePairRemoveLiquidity = /*#__PURE__*/ createUseWriteContract(
  { abi: pairAbi, functionName: 'removeLiquidity' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"swap"`
 */
export const useWritePairSwap = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__
 */
export const useSimulatePair = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useSimulatePairAddLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairAbi,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const useSimulatePairRemoveLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairAbi,
    functionName: 'removeLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"swap"`
 */
export const useSimulatePairSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'swap',
})

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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"uniswapV2Router"`
 */
export const useReadRouterUniswapV2Router = /*#__PURE__*/ createUseReadContract(
  { abi: routerAbi, functionName: 'uniswapV2Router' },
)

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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapForwarding"`
 */
export const useWriteRouterSwapForwarding =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    functionName: 'swapForwarding',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapForwarding"`
 */
export const useSimulateRouterSwapForwarding =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    functionName: 'swapForwarding',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniswapRouterAbi}__
 */
export const useReadUniswapRouter = /*#__PURE__*/ createUseReadContract({
  abi: uniswapRouterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"WETH"`
 */
export const useReadUniswapRouterWeth = /*#__PURE__*/ createUseReadContract({
  abi: uniswapRouterAbi,
  functionName: 'WETH',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"factory"`
 */
export const useReadUniswapRouterFactory = /*#__PURE__*/ createUseReadContract({
  abi: uniswapRouterAbi,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"getAmountIn"`
 */
export const useReadUniswapRouterGetAmountIn =
  /*#__PURE__*/ createUseReadContract({
    abi: uniswapRouterAbi,
    functionName: 'getAmountIn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"getAmountOut"`
 */
export const useReadUniswapRouterGetAmountOut =
  /*#__PURE__*/ createUseReadContract({
    abi: uniswapRouterAbi,
    functionName: 'getAmountOut',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"getAmountsIn"`
 */
export const useReadUniswapRouterGetAmountsIn =
  /*#__PURE__*/ createUseReadContract({
    abi: uniswapRouterAbi,
    functionName: 'getAmountsIn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"getAmountsOut"`
 */
export const useReadUniswapRouterGetAmountsOut =
  /*#__PURE__*/ createUseReadContract({
    abi: uniswapRouterAbi,
    functionName: 'getAmountsOut',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"quote"`
 */
export const useReadUniswapRouterQuote = /*#__PURE__*/ createUseReadContract({
  abi: uniswapRouterAbi,
  functionName: 'quote',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__
 */
export const useWriteUniswapRouter = /*#__PURE__*/ createUseWriteContract({
  abi: uniswapRouterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useWriteUniswapRouterAddLiquidity =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"addLiquidityETH"`
 */
export const useWriteUniswapRouterAddLiquidityEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'addLiquidityETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const useWriteUniswapRouterRemoveLiquidity =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityETH"`
 */
export const useWriteUniswapRouterRemoveLiquidityEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityETHSupportingFeeOnTransferTokens"`
 */
export const useWriteUniswapRouterRemoveLiquidityEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityETHWithPermit"`
 */
export const useWriteUniswapRouterRemoveLiquidityEthWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityETHWithPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"`
 */
export const useWriteUniswapRouterRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityWithPermit"`
 */
export const useWriteUniswapRouterRemoveLiquidityWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityWithPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapETHForExactTokens"`
 */
export const useWriteUniswapRouterSwapEthForExactTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapETHForExactTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactETHForTokens"`
 */
export const useWriteUniswapRouterSwapExactEthForTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactETHForTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactETHForTokensSupportingFeeOnTransferTokens"`
 */
export const useWriteUniswapRouterSwapExactEthForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactTokensForETH"`
 */
export const useWriteUniswapRouterSwapExactTokensForEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactTokensForETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactTokensForETHSupportingFeeOnTransferTokens"`
 */
export const useWriteUniswapRouterSwapExactTokensForEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactTokensForTokens"`
 */
export const useWriteUniswapRouterSwapExactTokensForTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactTokensForTokensSupportingFeeOnTransferTokens"`
 */
export const useWriteUniswapRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapTokensForExactETH"`
 */
export const useWriteUniswapRouterSwapTokensForExactEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapTokensForExactETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapTokensForExactTokens"`
 */
export const useWriteUniswapRouterSwapTokensForExactTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniswapRouterAbi,
    functionName: 'swapTokensForExactTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__
 */
export const useSimulateUniswapRouter = /*#__PURE__*/ createUseSimulateContract(
  { abi: uniswapRouterAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useSimulateUniswapRouterAddLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"addLiquidityETH"`
 */
export const useSimulateUniswapRouterAddLiquidityEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'addLiquidityETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const useSimulateUniswapRouterRemoveLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityETH"`
 */
export const useSimulateUniswapRouterRemoveLiquidityEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityETHSupportingFeeOnTransferTokens"`
 */
export const useSimulateUniswapRouterRemoveLiquidityEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityETHWithPermit"`
 */
export const useSimulateUniswapRouterRemoveLiquidityEthWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityETHWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"`
 */
export const useSimulateUniswapRouterRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"removeLiquidityWithPermit"`
 */
export const useSimulateUniswapRouterRemoveLiquidityWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'removeLiquidityWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapETHForExactTokens"`
 */
export const useSimulateUniswapRouterSwapEthForExactTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapETHForExactTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactETHForTokens"`
 */
export const useSimulateUniswapRouterSwapExactEthForTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactETHForTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactETHForTokensSupportingFeeOnTransferTokens"`
 */
export const useSimulateUniswapRouterSwapExactEthForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactTokensForETH"`
 */
export const useSimulateUniswapRouterSwapExactTokensForEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactTokensForETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactTokensForETHSupportingFeeOnTransferTokens"`
 */
export const useSimulateUniswapRouterSwapExactTokensForEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactTokensForTokens"`
 */
export const useSimulateUniswapRouterSwapExactTokensForTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapExactTokensForTokensSupportingFeeOnTransferTokens"`
 */
export const useSimulateUniswapRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapTokensForExactETH"`
 */
export const useSimulateUniswapRouterSwapTokensForExactEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapTokensForExactETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniswapRouterAbi}__ and `functionName` set to `"swapTokensForExactTokens"`
 */
export const useSimulateUniswapRouterSwapTokensForExactTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniswapRouterAbi,
    functionName: 'swapTokensForExactTokens',
  })
