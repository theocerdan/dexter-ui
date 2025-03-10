import {LiquidityPool} from "../repository/LiquidityPoolRepository.ts";
import {useState} from "react";
import {
    useReadPairShares,
    useWritePairAddLiquidity,
    useWritePairRemoveLiquidity
} from "../generated.ts";
import {Address} from "viem";
import {Button, TextInput} from "react95";

const DepositLiquidityPool = ({ data, owner }: { data: LiquidityPool, owner: Address }) => {

    const [amountTokenA, setAmountTokenA] = useState(0);
    const [amountTokenB, setAmountTokenB] = useState(0);

    const { writeContract: removeLiquidity } = useWritePairRemoveLiquidity();

    const onTokenAChange = (e: any) => {
        setAmountTokenA(e.target.value);
    }

    const onTokenBChange = (e: any) => {
        setAmountTokenB(e.target.value);
    }

    const onAddLiquidity = () => {
        if (amountTokenA <= 0 || amountTokenB <= 0) {
            return;
        }
        addLiquidity({
            address: data.pair,
            args: [BigInt(amountTokenA), BigInt(amountTokenB)],
        })
    }

    const onRemoveLiquidity = () => {
        if (shares == undefined) {
            return;
        }
        removeLiquidity({ address: data.pair, args: [BigInt(shares)] });
    }

    const { writeContract: addLiquidity } = useWritePairAddLiquidity({ mutation: {
            onSuccess: () => {
                setAmountTokenA(0);
                setAmountTokenB(0);
            }
        }
    });
    const { data: shares } = useReadPairShares({ address: data.pair as `0x${string}`, args: [owner] });

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
            <Button disabled={!(amountTokenA > 0 && amountTokenB > 0)} onClick={onAddLiquidity}>Add</Button>
            {shares > 0 && <Button fullWidth onClick={onRemoveLiquidity}>Remove {shares} shares</Button>}
        </div>
    )
}

export default DepositLiquidityPool;