import {useState} from "react";
import {
    useWritePairAddLiquidity,
    useWritePairRemoveLiquidity
} from "../generated.ts";
import {Button, TextInput} from "react95";
import {toast} from "react-toastify";
import {LiquidityPool} from "../repository/types";
import {parseUnits} from "viem";
import {formatFixedDecimals} from "../helpers/formatFixedUnits.ts";

const DepositLiquidityPool = ({ data, onAddLiquidity, onRemoveLiquidity, shares }: { data: LiquidityPool, onAddLiquidity: () => void | undefined, onRemoveLiquidity: () => void | undefined, shares: bigint }) => {

    const [amountTokenA, setAmountTokenA] = useState<number>(0);
    const [amountTokenB, setAmountTokenB] = useState<number>(0);

    const { writeContract: removeLiquidity } = useWritePairRemoveLiquidity({
        mutation: {
            onSuccess: () => {
                if (onRemoveLiquidity) {
                    onRemoveLiquidity();
                }
            },
            onError: (e) => {
                toast(e.message);
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
        setAmountTokenA(0);
        setAmountTokenB(0);
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
            },
            onError: (e) => {
                toast(e.message);
            }
        }
    });

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
            <Button disabled={!(amountTokenA > 0 && amountTokenB > 0)} onClick={handleAddLiquidity}>Add</Button>
            {shares > 0 && <Button fullWidth onClick={handleRemoveLiquidity}>Remove {formatFixedDecimals(shares, 18)} shares</Button>}
        </div>
    )
}

export default DepositLiquidityPool;