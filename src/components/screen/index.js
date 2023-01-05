import { Main, Title , Convert, Button } from "./style";
import { useState } from "react";
import axios from "axios";
import "./style.css";
import { Key } from "../../key";


export const MainDiv = (props)=>{
    const [amount , setAmount] = useState(0.00.toFixed(2))
    const [converted , setConverted] = useState(0.00.toFixed(2))
    const [fields , setFields] = useState({
        originalCurrency : "USD",
        toTransfer: "BRL"
    })

    const handleChange = (e)=>setFields({
        ...fields,
        [e.currentTarget.className] : e.currentTarget.value
    })
    const changeValue = (e)=>{
        
        let value = Number(e.target.value)
        setAmount(value)
    }

    const click = async()=>{
        let multiply = 0
        let key = Key
        try{
        await axios.get(`https://free.currconv.com/api/v7/convert?q=${fields.originalCurrency}_${fields.toTransfer}&compact=ultra&apiKey=${key}`)
            .then(
                response => {console.log(response)
                    for(let key in response.data){
                        multiply = response.data[key]
                    }
                }
            )
            let finRes = (amount * multiply).toFixed(2)
            setConverted(finRes)
        }catch(e){
            console.log("Erro na requisiçao-----" + e)
        }
   }
    return(
        <Main>
            <Title>{props.title}</Title>
            <div>
                <select className="originalCurrency" onChange={(e)=>handleChange(e)} value={fields.originalCurrency}>
                <option value="USD">🇺🇸</option>
                    <option value="CAD">🇨🇦</option>
                    <option value="BRL">🇧🇷</option>
                    <option value="EUR">🇪🇺</option>
                    <option value="ARS">🇦🇷</option>
                    <option value="CLP">🇨🇱</option>
                    <option value="PEN">🇵🇪</option>
                    <option value="GBP">🇬🇧</option>
                    <option value="CHW">🇨🇭</option>
                    <option value="AUD">🇦🇺</option>
                </select>
            </div>

            <div>

            </div>

            <div>
                <select className="toTransfer" onChange={(e)=>handleChange(e)} value={fields.toTransfer}>
                    <option value="USD">🇺🇸</option>
                    <option value="CAD">🇨🇦</option>
                    <option value="BRL">🇧🇷</option>
                    <option value="EUR">🇪🇺</option>
                    <option value="ARS">🇦🇷</option>
                    <option value="CLP">🇨🇱</option>
                    <option value="PEN">🇵🇪</option>
                    <option value="GBP">🇬🇧</option>
                    <option value="CHW">🇨🇭</option>
                    <option value="AUD">🇦🇺</option>
                </select>
            </div>
            <Convert>
                <label>Amount</label>
                ${fields.originalCurrency}
                <input type="number" className="toTransfer" value={amount} onChange={(e)=>{changeValue(e)}}></input>
            </Convert>
            <Convert>
                <label>Converted</label>
                ${fields.toTransfer}
                <input type="number" className="amount" value={converted}></input>
            </Convert>
            <Button onClick={()=>{click()}}>Convert</Button>
        </Main>
    )
}