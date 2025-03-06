import { create } from 'zustand'
import {getAmoutOut, Token} from "../repository/SwapRepository.ts";
import zukeeper from "zukeeper";

type Store = {
    tokenIn: Token | null,
    tokenOut: Token | null,
    setTokenIn: (token: Token) => void,
    setTokenOut: (token: Token) => void,
    amountIn: number,
    amountOut: number,
    setAmountIn: (amount: number) => void,
    setAmountOut: (amount: number) => void,
    getAmountOut: () => void,
}

const useSwapStore = create<Store>(zukeeper((set, get) => ({
    tokenIn: null,
    tokenOut: null,
    setTokenIn: (token: Token) => set({ tokenIn: token }),
    setTokenOut: (token: Token) => set({ tokenOut: token }),
    amountIn: 0,
    getAmountOut: async () => {
        set({ amountOut:  await getAmoutOut(get().amountIn, get().tokenIn, get().tokenOut) });
    },
    amountOut: 0,
    setAmountIn: (amount: number) => set({ amountIn: amount }),
    setAmountOut: (amount: number) => set({ amountOut: amount }),
})));

window.store = useSwapStore;

export {  useSwapStore };