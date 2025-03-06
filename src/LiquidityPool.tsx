import {GroupBox, Window, WindowContent, WindowHeader} from "react95";

const LiquidityPools = () => {
    return (
        <GroupBox label='Liquidity Pools' style={{display: 'flex', padding: 30, flexDirection: 'row', gap: 10 }}>
            <LiquidityPool/>
            <LiquidityPool/>
            <LiquidityPool/>
        </GroupBox>
    )
}

const LiquidityPool = () => {
    return (
        <Window style={{width: '400px', height: '200px'}}>
            <WindowHeader>
                ETH - USD
            </WindowHeader>
            <WindowContent>
            Total shares: 1000
                <br />
                Token A reserve: 1000
                <br />
                Token B reserve: 1000
                <br />
                Token A fees: 1000
                <br />
                Token B fees: 1000
            </WindowContent>
        </Window>
    )
}


export default LiquidityPools;