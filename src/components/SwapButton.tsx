import {Button} from "react95";
import {toast} from "react-toastify";
import {Token} from "../repository/SwapRepository.ts";
import {Address, maxInt256, parseEther} from "viem";
import {
    useReadErc20Allowance,
    useReadErc20BalanceOf,
    useWriteErc20Approve, useWriteRouterSwap
} from "../generated.ts";
import {ROUTER_ADDRESS} from "../address.tsx";

const SwapButton = ({account, amountIn, tokenIn, tokenOut}: { account: Address, amountIn: number, tokenIn: Token, tokenOut: Token}) => {

    //const { data: decimalsIn } = useReadErc20Decimals({ address: tokenIn.address });
    //const { data: decimalsOut } = useReadErc20Decimals({ address: tokenOut.address });
    const { data: balanceIn, refetch: refetchBalanceIn } = useReadErc20BalanceOf({ address: tokenIn.address, args: [account] });
    const { data: balanceOut, refetch: refetchBalanceOut } = useReadErc20BalanceOf({ address: tokenOut.address, args: [account] });
    const { data: allowance, refetch: refetchAllowance } = useReadErc20Allowance({ address: tokenIn.address, args: [account, ROUTER_ADDRESS] });

    const { writeContract: allow } = useWriteErc20Approve({ mutation: {
            onSuccess: () => {
                toast('Approved ' + tokenIn.symbol);
            },
            onError: (e) => {
                toast(e.message);
            }
        }
    });


    const { writeContract: swap } = useWriteRouterSwap({ mutation: {
            onSuccess: () => {
                toast('Swap completed ' + amountIn + ' ' + tokenIn.symbol + ' to ' + tokenOut.symbol);
                refetchBalanceIn();
                refetchBalanceOut();
                refetchAllowance();
            },
            onError: (e) => {
                toast(e.message);
                toast('Swap not completed ' + amountIn + ' ' + tokenIn.symbol + ' to ' + tokenOut.symbol);
            }
        }
    });

    const handleSwap = () => {
        if (allowance == undefined || allowance < BigInt(amountIn)) {
            allow({ address: tokenIn.address, args: [ROUTER_ADDRESS, maxInt256] });
        }
        //const amountInWithDecimals = parseUnits(amountIn.toString(), decimalsIn);
        const attachedValue = isForwardedToUniswap() ? parseEther('1.0') : BigInt(0);
        swap({ address: ROUTER_ADDRESS, args: [BigInt(amountIn), tokenIn.address, tokenOut.address], value: attachedValue });
    }

    const isForwardedToUniswap = () => tokenIn.symbol.includes('🦄') || tokenOut.symbol.includes('🦄');
    return (<><Button size='lg' fullWidth onClick={handleSwap}>{'Swap ' + amountIn + ' ' + tokenIn.symbol + ' to '}</Button>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {balanceIn != undefined  && <p>Balance: {balanceIn} {tokenIn.symbol}</p>}
            {balanceOut != undefined  && <p>Balance: {balanceOut} {tokenOut.symbol}</p>}
        </div>
    </>);
}

export default SwapButton;