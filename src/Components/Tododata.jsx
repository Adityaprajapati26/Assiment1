import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Tododata = () => {
  const {id}=useParams()
  const{todos}=useSelector((state)=>state.todos)
  
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch(` http://localhost:8080/todos/${id}`)
    .then((r)=>r.json())
    .then((d)=>{
      console.log(d)
      setData(d)})

  },[id])
  const[current]=useState(()=>{
    return todos.find((item)=>item.id)
  })
  // console.log(data)
  return (
    <div>
      
        <p>{data.title}</p>
        <p>{data.status}</p>
       
    </div>
  )
}

export default Tododata