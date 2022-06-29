import axios from 'axios';
import React, { useState } from 'react'

import { useDispatch, useSelector} from 'react-redux';
import {addtodoserror,addtodosloading,addtodossuccess } from '../Reducer/action';



const Todoitem = ({getTodos}) => {
  
    const [title,setTitle]=useState("")
    
    const dispatch=useDispatch()
    
  
    const handleClick=()=>{
        const payload={
         title,
          status:"false",
          
        };
    
        
        dispatch(addtodosloading());
        axios.post(`http://localhost:8080/todos`,payload)
       .then((res)=>dispatch(addtodossuccess(res.data)))
       .then(()=>getTodos())
        .catch((err)=>dispatch(addtodoserror(err)))
    
     setTitle("")
      
    };
  
  
    return (
      <>
      <div>
      <input type="text"  
      placeholder="Add todo" 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
       />
       <button onClick={handleClick}>ADD Todo</button>
      </div>
     
      
   
      
      </>
    )
  
}

export default Todoitem