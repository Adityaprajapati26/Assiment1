import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector} from 'react-redux';
import { gettodosloading,gettodossuccess,gettodoserror } from '../Reducer/action';
import Todo from './Todo';
import Tododata from './Tododata';

const Todoitem = () => {
  
    const [title,setTitle]=useState("")
    
    const dispatch=useDispatch()
  
    const handleClick=()=>{
        const payload={
         
         
          title,
          id:uuid(),
          status:false,
          
        };
        fetch(`http://localhost:8080/todos`,{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
       "content-type":"application/json"
     }
        
      }).then(()=>{
        dispatch(gettodosloading());
        fetch(`http://localhost:8080/todos`)
        .then((res)=>res.json())
        .then((res)=>dispatch(gettodossuccess(res)))
        .catch((error)=>dispatch(gettodoserror()))
      })
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
     <div>
      <Todo/>
     </div>
      
   
      
      </>
    )
  
}

export default Todoitem