import {
    useWriteErc20Approve,
} from "../generated.ts";
import {Address, maxInt256} from "viem";
import {Button} from "react95";
import {LiquidityPool} from "../repository/types";
import toast from "react-hot-toast";

const AllowanceLiquidityPool = ({ data, onApprove }: { data: LiquidityPool, owner: Address, onApprove: () => void}) => {

    const { writeContract: approveToken } = useWriteErc20Approve({ mutation: {
            onSuccess: () => {
                toast.success("Approved successfully");
                onApprove();
            },
            onError: (e) => {
                toast.error("Error while approving");
                console.error(e.message);
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