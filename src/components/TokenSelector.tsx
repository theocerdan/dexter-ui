import {Select, TextInput} from "react95";
import {Token} from "../repository/SwapRepository.ts";
import React, {useState} from "react";
import {SelectOption} from "react95/dist/Select/Select.types";
import {Address} from "viem";

const useTokenInSelector = (availableCoins: Token[]) => {

    const defaultToken = availableCoins[0];
    const defaultAmount = 1;
    const [tokenIn, setTokenIn] = useState<Token>(defaultToken);
    const [amount, setAmount] = useState<number>(defaultAmount);

    const handleTokenChange = (selectedOption: SelectOption<Address>) => setTokenIn({
        symbol: selectedOption.label as string,
        address: selectedOption.value
    });
    
    const options: SelectOption<Address>[] = availableCoins.map((e) => {
        return {
            label: e.symbol,
            value: e.address
        }
    });

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value));

    return {
        component: <div style={{display: 'flex', flexDirection: 'column', gap: 5, width: "50%"}}>
            <Select options={options} onChange={handleTokenChange} defaultValue={defaultToken.address}/>
            <div>
                <TextInput type={"number"} defaultValue={amount} onChange={handleAmountChange}/>
            </div>
        </div>
    , token: tokenIn, amount: amount }
}

const useTokenOutSelector = (availableCoins: Token[]) => {

    const [token, setToken] = useState<Token>(availableCoins[0]);

    const options: SelectOption<Address>[] = availableCoins.map((e) => {
        return {
            label: e.symbol,
            value: e.address
        }
    });

    const handleTokenChange = (selectedOption: SelectOption<Address>) => setToken({
        symbol: selectedOption.label as string,
        address: selectedOption.value
    });

    return {
        component: <div style={{display: 'flex', flexDirection: 'column', gap: 5, width: "50%"}}>
            <Select options={options} onChange={handleTokenChange}/>
        </div>
        , token: token }

}

export { useTokenInSelector, useTokenOutSelector };