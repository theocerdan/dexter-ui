import {useAccount, useConnect, useDisconnect} from "wagmi";
import {Button, Frame, MenuList, MenuListItem, Separator} from "react95";

const ConnectButtons = () => {

    const { address, isConnected } = useAccount();
    const { connectors, connect } = useConnect();

    const { disconnect } = useDisconnect();


    const handleConnect = () => {
        connect({ connector: connectors[0] });
    }

    const handleDisconnect = () => {
        disconnect();
    }

    return (
        <div>
            <Frame style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontWeight: 'bold'}}>
                    Dexter
                </div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    {address}
                    <Separator orientation='vertical' size='43px'/>
                    {!isConnected && <Button onClick={handleConnect}>connect</Button>}
                    {isConnected && <Button onClick={handleDisconnect}>disconnect</Button>}
                </div>
            </Frame>
        </div>
    )
}

export default ConnectButtons;