import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gettodoserror, gettodosloading, gettodossuccess } from '../Reducer/action'
import axios from "axios"
import Todoitem from './Todoitem'
const Todo = () => {
  const todos=useSelector((state)=>state.todos)
  const dispatch=useDispatch()

  const getTodos=()=>{
    dispatch(gettodosloading())
    axios.get(`http://localhost:8080/todos`)
     .then((d)=>dispatch(gettodossuccess(d.data)))
     .catch((er)=>dispatch(gettodoserror(er)))
    
}
useEffect(()=>{
  getTodos()
  },[])
console.log(todos)


  return  (
    <div>
      todo
      <Todoitem getTodos={getTodos}/>
      {todos?.map((data)=>(
      <div key={data.id}>
     <Link to={`/${data.id}`}>{data.title}</Link>
      </div>
    ))}
    </div>
  )
}

export default Todo