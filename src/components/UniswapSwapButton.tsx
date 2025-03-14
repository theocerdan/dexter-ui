import {Button} from "react95";
import {toast} from "react-toastify";
import {Token} from "../repository/SwapRepository.ts";
import {Address, maxInt256, parseEther} from "viem";
import {
    useReadErc20Allowance,
    useReadErc20BalanceOf,
    useWriteErc20Approve,
    useWriteRouterSwapForwarding
} from "../generated.ts";
import {ROUTER_ADDRESS} from "../address.tsx";

const UniswapSwapButton = ({account, amountIn, tokenIn, tokenOut}: { account: Address, amountIn: number, tokenIn: Token, tokenOut: Token}) => {

    const amountOut = 0;

    const { data: balanceIn, refetch: refetchBalanceIn } = useReadErc20BalanceOf({ address: tokenIn.address, args: [account] });
    const { data: balanceOut, refetch: refetchBalanceOut } = useReadErc20BalanceOf({ address: tokenOut.address, args: [account] });
    const { data: allowance, refetch: refetchAllowance } = useReadErc20Allowance({ address: tokenIn.address, args: [account, ROUTER_ADDRESS] });
    const { writeContract: allow } = useWriteErc20Approve({ mutation: {
            onSuccess: () => {
                toast('Approved ' + tokenIn.symbol + ' to (router)' + ROUTER_ADDRESS);
            },
            onError: (e) => {
                toast(e.message);
            }
        }
    });


    const { writeContract: swap } = useWriteRouterSwapForwarding({ mutation: {
            onSuccess: () => {
                toast('Swap completed ' + amountIn + ' ' + tokenIn.symbol + ' to ' + tokenOut.symbol + " on Uniswap v2");
                refetchBalanceIn();
                refetchBalanceOut();
                refetchAllowance();
            },
            onError: (e) => {
                toast(e.message);
            }
        }
    });

    const handleSwap = () => {
        if (allowance == undefined || allowance < BigInt(amountIn)) {
            allow({ address: tokenIn.address, args: [ROUTER_ADDRESS, maxInt256] });
        }
        swap({ address: ROUTER_ADDRESS, args: [BigInt(amountIn), tokenIn.address, tokenOut.address, 100000000000n], value: parseEther('1.0') });
    }

    return (<>
                <Button size='lg' fullWidth
                        onClick={handleSwap}>{'Uni Swap ' + amountIn + ' ' + tokenIn.symbol + ' to ' + amountOut + ' ' + tokenOut.symbol}</Button>
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

export default UniswapSwapButton;