import { GET_TODOS_LOADING,GET_TODOS_SUCCESS,GET_TODOS_ERROR } from "./action";

const initState={
    loading:false,
    error:false,
    todos:[],
}



export const todoReducer=(state=initState,action)=>{
    switch(action.type){
      case GET_TODOS_ERROR:{
          return{
              loading:false,
              error:true,
              todos:[]

          }
      }
      case GET_TODOS_LOADING:{
          return{
              ...state,
              loading:true,
              error:false,
              todos:action.payload
          }

      }
      case GET_TODOS_SUCCESS:{
          return{
              loading:false,
              error:false,
              todos:action.payload
          }

      }
      default:{
          return{...state}
      }

    }
}