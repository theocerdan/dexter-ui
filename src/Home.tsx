import LiquidityPools from "./components/LiquidityPools.tsx";
import ConnectButtons from "./components/ConnectButtons.tsx";
import {useAccount} from "wagmi";
import CreateLiquidityPool from "./components/CreateLiquidityPool.tsx";
import SwapBox from "./components/Swap.tsx";
import {Monitor} from "react95";

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
            </> : <Connect />}
        </div>
    );
}

const Connect = () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        gap: 50
    }}>
        <Monitor></Monitor>
        <h1 style={{fontSize: '30px', color: 'white'}}>You must be connected to interact with Dexter</h1>
    </ div>
}

export default Home;