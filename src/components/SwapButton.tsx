import {Button} from "react95";
import {toast} from "react-toastify";
import {Address, maxInt256, parseEther, parseUnits} from "viem";
import {
    useReadErc20Allowance,
    useWriteErc20Approve, useWriteRouterSwap
} from "../generated.ts";
import {ROUTER_ADDRESS, ZERO_ADDRESS} from "../address.tsx";
import {Token} from "../repository/types";
import {useGetQuote} from "../hooks/useGetQuote.tsx";
import {useBalance} from "../hooks/useBalance.tsx";

const SwapButton = ({account, amountIn, tokenIn, tokenOut}: { account: Address, amountIn: number, tokenIn: Token, tokenOut: Token}) => {

    const { balance: balanceIn, refetchBalance: refetchBalanceIn } = useBalance(tokenIn, account);
    const { balance: balanceOut, refetchBalance: refetchBalanceOut } = useBalance(tokenOut, account);
    const { data: allowance, refetch: refetchAllowance } = useReadErc20Allowance({ address: tokenIn.address, args: [account, ROUTER_ADDRESS] });
    const { quote, pairAddress } = useGetQuote(tokenIn, tokenOut, amountIn);

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
        const attachedValue = isForwardedToUniswap ? parseEther('1.0') : BigInt(0);

        swap({ address: ROUTER_ADDRESS, args: [amountInWithUnits, tokenIn.address, tokenOut.address, 1n], value: attachedValue });
    }

    const isForwardedToUniswap = pairAddress == ZERO_ADDRESS;

    const getSwapHelper = (): { text: string, disable: boolean } => {
        if (tokenIn.address == tokenOut.address) {
            return { text: 'Same token', disable: true };
        }
        if (amountIn == 0) {
            return { text: 'Enter amount', disable: true };
        }
        if (isForwardedToUniswap) {
            return { text: 'Forwarded to Uniswap', disable: false };
        }
        if (quote == null) {
            return { text: 'Loading quote...', disable: true };
        }
        return { text: 'Swap ' + amountIn + ' ' + tokenIn.symbol + ' to ' + quote + " " + tokenOut.symbol , disable: false };
    }

    const swapHelper = getSwapHelper();

    return (<><Button size='lg' fullWidth onClick={handleSwap} disabled={swapHelper.disable}>{swapHelper.text}</Button>
        <div style={{display: 'flex', justifyContent: 'space-between', gap: 10}}>
            {balanceIn != undefined  && <p>Balance: {balanceIn} {tokenIn.symbol}</p>}
            {balanceOut != undefined  && <p>Balance: {balanceOut} {tokenOut.symbol}</p>}
        </div>
    </>);
}

export default SwapButton;