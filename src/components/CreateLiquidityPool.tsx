import {Button, GroupBox, TextInput} from "react95";
import {useWriteRouterCreatePair} from "../generated.ts";
import {ROUTER_ADDRESS} from "../address.tsx";
import {useState} from "react";
import {Address, isAddress} from "viem";
import toast from "react-hot-toast";

const CreateLiquidityPool = () => {

    const { writeContract: createPool } = useWriteRouterCreatePair({ mutation: {
            onSuccess: () => {
                toast.success("Pool created successfully");
            },
            onError: (e) => {
                console.error(e.message);
                toast.error("Error while creating pool");
            }
    }});

    const [tokenA, setTokenA] = useState<string>("");
    const [tokenB, setTokenB] = useState<string>("");

    const handleCreatePool = () => {
        if (!isAddress(tokenA) || !isAddress(tokenB)) {
            toast.error("Invalid address");
            return;
        }
        createPool({
            args: [tokenA as Address, tokenB as Address],
            address: ROUTER_ADDRESS
        });
    }

    const handleTokenAChange = (e: any) => {
        setTokenA(e.target.value);
    }

    const handleTokenBChange = (e: any) => {
        setTokenB(e.target.value);
    }

    return <GroupBox label='Create Liquidity Pool' style={{ justifyContent: 'center', padding: 30, flexDirection: 'row', gap: 10, width: '300px' }}>
            <div style={{display: 'flex', gap: 10, flexDirection: "column"}}>
                <TextInput placeholder={"Token A Address"} value={tokenA} onChange={handleTokenAChange}></TextInput>
                <TextInput placeholder={"Token B Address"} value={tokenB} onChange={handleTokenBChange}></TextInput>
                <Button onClick={handleCreatePool}>Create now !</Button>
            </div>
    </GroupBox>
}

export default CreateLiquidityPool;