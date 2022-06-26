export const GET_TODOS_ERROR="GET_TODOS_ERROR"
export const GET_TODOS_LOADING="GET_TODOS_LOADING"
export const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS"
export const gettodoserror=()=>({
    tyoe:GET_TODOS_ERROR,
  })
  export const gettodosloading=()=>({
      type:GET_TODOS_LOADING,
  });
  export const gettodossuccess=(payload)=>({
      type:GET_TODOS_SUCCESS,
      payload,
  })