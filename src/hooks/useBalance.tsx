import {useReadErc20BalanceOf} from "../generated.ts";
import {Token} from "../repository/types";
import {Address} from "viem";
import {formatFixedDecimals} from "../helpers/formatFixedUnits.ts";

export const useBalance = (token: Token, account: Address) => {
    const { data: balance, refetch: refetchBalance } = useReadErc20BalanceOf({ address: token.address, args: [account] });

    const returnBalance = balance == undefined ? null : formatFixedDecimals(balance, token.decimals);
    return ({ balance: returnBalance, refetchBalance})
};