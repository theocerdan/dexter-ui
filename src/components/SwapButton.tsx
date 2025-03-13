import {Button} from "react95";
import {toast} from "react-toastify";
import {Token} from "../repository/SwapRepository.ts";
import {Address, maxInt256, zeroAddress} from "viem";
import {
    useReadErc20Allowance,
    useReadErc20BalanceOf,
    useReadPairGetQuote,
    useWriteErc20Approve,
    useWritePairSwap
} from "../generated.ts";

const SwapButton = ({account, amountIn, tokenIn, tokenOut, pairAddress}: { account: Address, amountIn: number, tokenIn: Token, tokenOut: Token, pairAddress: Address}) => {

    const { data: amountOut, refetch: refetchQuote } = useReadPairGetQuote({ address: pairAddress, args: [tokenIn.address, BigInt(amountIn)] });
    const { data: balanceIn, refetch: refetchBalanceIn } = useReadErc20BalanceOf({ address: tokenIn.address, args: [account] });
    const { data: balanceOut, refetch: refetchBalanceOut } = useReadErc20BalanceOf({ address: tokenOut.address, args: [account] });
    const { data: allowance, refetch: refetchAllowance } = useReadErc20Allowance({ address: tokenIn.address, args: [account, pairAddress] });
    const { writeContract: allow } = useWriteErc20Approve({ mutation: {
            onSuccess: () => {
                toast('Approved ' + tokenIn.symbol + ' to ' + pairAddress);
            },
            onError: (e) => {
                toast(e.message);
            }
        }
    });

    const { writeContract: swap } = useWritePairSwap({ mutation: {
            onSuccess: () => {
                toast('Swap completed ' + amountIn + ' ' + tokenIn.symbol + ' to ' + tokenOut.symbol + " on " + pairAddress);
                refetchBalanceIn();
                refetchBalanceOut();
                refetchAllowance();
                refetchQuote();
            },
            onError: (e) => {
                toast(e.message);
            }
        }
    });

    const handleSwap = () => {
        if (allowance == undefined || allowance < BigInt(amountIn)) {
            allow({ address: tokenIn.address, args: [pairAddress, maxInt256] });
        }
        if (amountOut == undefined || amountOut <= 0) {
            toast("Invalid swap because price can't be calculated");
            return ;
        }
        swap({ address: pairAddress, args: [tokenIn.address, BigInt(amountIn)] });
    }

    return (<>
        {pairAddress === zeroAddress && <Button size='lg' fullWidth disabled>Pool not found</Button>}
        {(pairAddress !== zeroAddress && amountOut !== undefined) &&
            <>
                <Button size='lg' fullWidth
                        onClick={handleSwap}>{'Swap ' + amountIn + ' ' + tokenIn.symbol + ' to ' + amountOut + ' ' + tokenOut.symbol}</Button>
            </>}
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>Balance: {balanceIn} {tokenIn.symbol}</p>
            <p>Balance: {balanceOut} {tokenOut.symbol}</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {amountOut != undefined && <p>1 {tokenIn.symbol} = {(Number(amountOut) / amountIn).toFixed(2)} {tokenOut.symbol}</p>}
            {amountOut != undefined && <p>1 {tokenOut.symbol} = {(amountIn / Number(amountOut)).toFixed(2)} {tokenIn.symbol}</p>}
        </div>
    </>);
}

export default SwapButton;