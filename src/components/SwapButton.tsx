import {Button} from "react95";
import {toast} from "react-toastify";
import {Address, maxInt256, parseEther, parseUnits} from "viem";
import {
    useReadErc20Allowance,
    useReadErc20BalanceOf,
    useWriteErc20Approve, useWriteRouterSwap
} from "../generated.ts";
import {ROUTER_ADDRESS} from "../address.tsx";
import {Token} from "../repository/types";
import {formatFixedDecimals} from "../helpers/formatFixedUnits.ts";

const SwapButton = ({account, amountIn, tokenIn, tokenOut}: { account: Address, amountIn: number, tokenIn: Token, tokenOut: Token}) => {

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
        const amountInWithUnits = parseUnits(amountIn.toString(), tokenIn.decimals);
        if (allowance == undefined || allowance < amountInWithUnits) {
            allow({ address: tokenIn.address, args: [ROUTER_ADDRESS, maxInt256] });
        }
        const attachedValue = isForwardedToUniswap() ? parseEther('1.0') : BigInt(0);

        swap({ address: ROUTER_ADDRESS, args: [amountInWithUnits, tokenIn.address, tokenOut.address, 1n], value: attachedValue });
    }

    const isForwardedToUniswap = () => tokenIn.symbol.includes('🦄') || tokenOut.symbol.includes('🦄');

    return (<><Button size='lg' fullWidth onClick={handleSwap}>{'Swap ' + ' ' + tokenIn.symbol + ' to '}</Button>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {balanceIn != undefined  && <p>Balance: {formatFixedDecimals(balanceIn, tokenIn.decimals)} {tokenIn.symbol}</p>}
            {balanceOut != undefined  && <p>Balance: {formatFixedDecimals(balanceOut, tokenOut.decimals)} {tokenOut.symbol}</p>}
        </div>
    </>);
}

export default SwapButton;