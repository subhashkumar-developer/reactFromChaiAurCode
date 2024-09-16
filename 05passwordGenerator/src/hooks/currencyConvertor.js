import {useState,useEffect} from 'react'



function currencyConvertor(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`).then((res)=>res.json())
    },[])
}