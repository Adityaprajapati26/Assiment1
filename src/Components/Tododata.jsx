import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { useParams } from 'react-router-dom'

const Tododata = () => {
  const {id}=useParams()
  // const{todos}=useSelector((state)=>state.todos)
  const[data,setData]=useState([])
  
  useEffect(()=>{
    axios.get(` http://localhost:8080/todos/${id}`)
 
    .then((d)=>{
      console.log(d.data)
      setData(d.data)})

  },[id])
 
  
  console.log(data)
  return (
    <div>
      Single
        <p>{data.title}</p>
        <p>{data.id}</p>
        <p>{data.status}</p>
       
    </div>
  )
}

export default Tododata