import axios from "axios"

export const GET_TODOS_ERROR="GET_TODOS_ERROR"
export const GET_TODOS_LOADING="GET_TODOS_LOADING"
export const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS"
export const ADD_TODOS_ERROR="ADD_TODOS_ERROR"
export const ADD_TODOS_LOADING="ADD_TODOS_LOADING"
export const ADD_TODOS_SUCCESS="ADD_TODOS_SUCCESS"
export const getTodos=()=>(dispatch)=>{
    dispatch(gettodosloading())
    axios.get(`http://localhost:8080/todos`)
     .then((d)=>dispatch(gettodossuccess(d.data)))
     .catch((er)=>dispatch(gettodoserror(er)))
    
}

export const gettodoserror=()=>({
    type:GET_TODOS_ERROR,
  })
  export const gettodosloading=()=>({
      type:GET_TODOS_LOADING,
  });
  export const gettodossuccess=(payload)=>({
      type:GET_TODOS_SUCCESS,
      payload,
  })
  export const addtodoserror=()=>({
    type:ADD_TODOS_ERROR,
  })
  export const addtodosloading=()=>({
      type:ADD_TODOS_LOADING,
  });
  export const addtodossuccess=(payload)=>({
      type:ADD_TODOS_SUCCESS,
      payload,
  })
