import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {
    const[ready,setReady]=useState(false)
    useEffect(()=>{
        let time=setTimeout(()=>{
            setReady(true)
        },5000)
        return ()=>{clearTimeout(time)} 
    },[])
    return ready
}

export default Timer