import React from 'react'
import FetchData from '../Customhooks/FetchData'

const Fetch = () => {
    const{ data,loding,error}=FetchData()
  return (
    {data.map(()=>(

        ))
    }
    
  )
}

export default Fetch