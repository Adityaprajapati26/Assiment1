import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Todo = () => {
  const {loading,error,todos}=useSelector((state)=>state.todos)
  return  loading?<h1>Loading...</h1>: error?<h1>Something went Wrong</h1>:(
    <div>{todos.map((data)=>(
      <div>
      <Link to={`/Todo/${data.id}`}>{data.title}</Link>
      </div>
    ))}</div>
  )
}

export default Todo