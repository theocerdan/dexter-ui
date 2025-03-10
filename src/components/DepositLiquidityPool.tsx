import {LiquidityPool} from "../repository/LiquidityPoolRepository.ts";
import {useState} from "react";
import {
    useWritePairAddLiquidity,
    useWritePairRemoveLiquidity
} from "../generated.ts";
import {Button, TextInput} from "react95";
import {toast} from "react-toastify";

const DepositLiquidityPool = ({ data, onAddLiquidity, onRemoveLiquidity, shares }: { data: LiquidityPool, onAddLiquidity: () => void | undefined, onRemoveLiquidity: () => void | undefined, shares: bigint }) => {

    const [amountTokenA, setAmountTokenA] = useState(0);
    const [amountTokenB, setAmountTokenB] = useState(0);

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
            args: [BigInt(amountTokenA), BigInt(amountTokenB)],
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
                <p>{data.tokenASymbol}</p>
                <TextInput type={"number"} fullWidth placeholder={data.tokenASymbol} onChange={onTokenAChange}
                           value={amountTokenA}></TextInput>
            </div>
            <div>
                <p>{data.tokenBSymbol}</p>
                <TextInput type={"number"} fullWidth placeholder={data.tokenBSymbol} onChange={onTokenBChange}
                           value={amountTokenB}></TextInput>
            </div>
            <Button disabled={!(amountTokenA > 0 && amountTokenB > 0)} onClick={handleAddLiquidity}>Add</Button>
            {shares > 0 && <Button fullWidth onClick={handleRemoveLiquidity}>Remove {shares} shares</Button>}
        </div>
    )
}

export default DepositLiquidityPool;