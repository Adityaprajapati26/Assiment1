import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FetchData = (url) => {
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res)=>res.json())
        .then((d)=>{
            setData(d),
            setLoading(false)
            setError(false)
        })
        .catch((er)=>{
           setError(true)
           setLoading(false) 
        })
    },[url])
 return {data,loading,error}
}

export default FetchData