import {
    useWriteErc20Approve,
} from "../generated.ts";
import {Address, maxInt256} from "viem";
import {Button} from "react95";
import {toast} from "react-toastify";
import {LiquidityPool} from "../repository/types";

const AllowanceLiquidityPool = ({ data, onApprove }: { data: LiquidityPool, owner: Address, onApprove: () => void}) => {

    const { writeContract: approveToken } = useWriteErc20Approve({ mutation: {
            onSuccess: () => {
                toast("Approved");
                onApprove();
            },
            onError: (e) => {
                toast(e.message);
            }
        }});

    const approveAll = () => {
        approveToken({
            address: data.tokenA.address,
            args: [data.pair, maxInt256],
        });
        approveToken({
            address: data.tokenB.address,
            args: [data.pair, maxInt256],
        });
    }

    return (
        <>
            <Button fullWidth onClick={approveAll}>Approve to deposit</Button>
        </>
    )
}

export default AllowanceLiquidityPool;