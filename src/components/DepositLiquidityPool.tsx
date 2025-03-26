import {useState} from "react";
import {
    useWritePairAddLiquidity,
    useWritePairRemoveLiquidity
} from "../generated.ts";
import {Button, TextInput} from "react95";
import {LiquidityPool} from "../repository/types";
import {parseUnits} from "viem";
import {formatFixedDecimals} from "../helpers/formatFixedUnits.ts";
import toast from "react-hot-toast";

const DepositLiquidityPool = ({ data, onAddLiquidity, onRemoveLiquidity, shares }: { data: LiquidityPool, onAddLiquidity: () => void | undefined, onRemoveLiquidity: () => void | undefined, shares: bigint }) => {

    const [amountTokenA, setAmountTokenA] = useState<number>(0);
    const [amountTokenB, setAmountTokenB] = useState<number>(0);

    const { writeContract: removeLiquidity } = useWritePairRemoveLiquidity({
        mutation: {
            onSuccess: () => {
                if (onRemoveLiquidity) {
                    onRemoveLiquidity();
                }
                toast.success("You successfully removed liquidity");
            },
            onError: (e) => {
                console.error(e.message);
                toast.error("Error while removing liquidity");
            },
        }
    });

    const onTokenAChange = (e: any) => {
        setAmountTokenA(e.target.value);
    }

    const onTokenBChange = (e: any) => {
        setAmountTokenB(e.target.value);
    }

    const handleAddLiquidity = () => {
        if (amountTokenA <= 0 || amountTokenB <= 0) {
            return;
        }
        addLiquidity({
            address: data.pair,
            args: [parseUnits(amountTokenA.toString(), data.tokenA.decimals), parseUnits(amountTokenB.toString(), data.tokenB.decimals)],
        })
    }

    const handleRemoveLiquidity = () => {
        if (shares == undefined) {
            return;
        }
        removeLiquidity({ address: data.pair, args: [BigInt(shares)] });
    }

    const { writeContract: addLiquidity } = useWritePairAddLiquidity({ mutation: {
            onSuccess: () => {
                if (onAddLiquidity) {
                    onAddLiquidity();
                }
                toast.success("You successfully added liquidity");
                resetInput();
            },
            onError: (e) => {
                console.error(e.message);
                toast.error("Error while adding liquidity");
            }
        }
    });

    const resetInput = () => {
        setAmountTokenA(0);
        setAmountTokenB(0);
    }

    const disableAddButton = !(amountTokenA > 0 && amountTokenB > 0);
    const disableRemoveButton = shares <= 0;


    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: 10 }}>
            <div>
                <p>{data.tokenA.symbol}</p>
                <TextInput type={"number"} fullWidth placeholder={data.tokenA.symbol} onChange={onTokenAChange}
                           value={amountTokenA}></TextInput>
            </div>
            <div>
                <p>{data.tokenB.symbol}</p>
                <TextInput type={"number"} fullWidth placeholder={data.tokenB.symbol} onChange={onTokenBChange}
                           value={amountTokenB}></TextInput>
            </div>
            <Button disabled={disableAddButton} onClick={handleAddLiquidity}>Add shares</Button>
            <Button disabled={disableRemoveButton} fullWidth onClick={handleRemoveLiquidity}>Remove {formatFixedDecimals(shares, 18)} shares</Button>
        </div>
    )
}

export default DepositLiquidityPool;