import Swap from "./Swap.tsx";
import LiquidityPools from "./components/LiquidityPools.tsx";
import ConnectButtons from "./ConnectButtons.tsx";
import {useAccount} from "wagmi";

const Home = () => {

    const { isConnected, address } = useAccount();

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <ConnectButtons/>
            {isConnected && address ? <>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Swap/>
                </div>
                <div style={{padding: 30}}>
                    <LiquidityPools/>
                </div>
            </> : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1 style={{ fontSize: '30px'}}>You must be connected to interact with Dexter</h1>
            </ div>}
        </div>
    );
}

export default Home;