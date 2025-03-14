import LiquidityPools from "./components/LiquidityPools.tsx";
import ConnectButtons from "./components/ConnectButtons.tsx";
import {useAccount} from "wagmi";
import CreateLiquidityPool from "./components/CreateLiquidityPool.tsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import SwapBox from "./components/Swap.tsx";

const Home = () => {

    const { isConnected, address } = useAccount();

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <ConnectButtons/>
            {isConnected && address ? <>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <SwapBox />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <CreateLiquidityPool />
                </div>
                <div style={{padding: 30}}>
                    <LiquidityPools />
                </div>
            </> : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1 style={{ fontSize: '30px'}}>You must be connected to interact with Dexter</h1>
            </ div>}
            <ReactQueryDevtools initialIsOpen={false} />
        </div>
    );
}

export default Home;