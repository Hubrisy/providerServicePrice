import './Calculator.css'
import { useState } from 'react';
import InputContainer from './components/InputContainer';
import MainInfo from './components/MainInfo';

function Calculator() {

    const [storageRange, setStorageRange] = useState(0);
    const [transferRange, setTransferRange] = useState(0)
    const [value,setValue] = useState();

    const radioValue = (e:any) => {
        setValue(e.target.value)
    }
    const changeStorage = (e:any) => {
        setStorageRange(e.target.value)
    }
    const changeTransfer = (e:any) => {
        setTransferRange(e.target.value)
    }

    const backblazePrice = () =>{
        const priceForStorage = 0.005;
        const priceForTransfer = 0.01;
        const result = (priceForStorage*storageRange) + (priceForTransfer*transferRange)
        if(result<7){
            return 7;
        }else{
            return result.toFixed(1);
        }
    }
    const bunnyPrice = () =>{
        let priceForTransfer = 0.01;
        const result = ((value === 'SSD' ? 0.02 : 0.01)*storageRange) + (priceForTransfer*transferRange)
        if(result>=10){
            return 10;
        }else{
            return result.toFixed(1)
        }
    }
    const scalewayPrice = () =>{
        let priceForStorage = value === 'Multi' ? 0.06 : 0.03;
        let priceForTransfer = 0.02;
        const result = (priceForStorage*storageRange) + (priceForTransfer*transferRange);

        if(storageRange<75){
            return priceForStorage === 0;
        }else if(transferRange<75){
            return priceForTransfer === 0
        }else{
            return (result - ((priceForStorage + priceForTransfer)*75)).toFixed(1)
        }
    }
    const vultrPrice = () =>{
        const priceForStorage = 0.005;
        const priceForTransfer = 0.01;
        const result = (priceForStorage*storageRange) + (priceForTransfer*transferRange)
        if(result<5){
            return 5;
        }else{
            return result.toFixed(1);
        }
    }
    return (
        <div className='calculator__main-container'>
            <InputContainer storage={storageRange} transfer={transferRange} 
            changeStorage={changeStorage} changeTransfer={changeTransfer} />
            <MainInfo widthOne={backblazePrice()} resultOne = {backblazePrice()} widthTwo={bunnyPrice()} resultTwo = {bunnyPrice()}
            widthThree={scalewayPrice()} resultThree = {scalewayPrice()} widthFour={vultrPrice()} resultFour = {vultrPrice()}
            value = {value} radioValue = {radioValue}/>
        </div>
    )
}

export default Calculator;