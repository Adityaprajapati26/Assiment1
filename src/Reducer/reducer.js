import { GET_TODOS_LOADING,GET_TODOS_SUCCESS,GET_TODOS_ERROR,ADD_TODOS_ERROR,ADD_TODOS_LOADING,ADD_TODOS_SUCCESS } from "./action";

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
            
          }

      }
      case GET_TODOS_SUCCESS:{
          return{
              loading:false,
              error:false,
              todos:action.payload
          }

      }
      case ADD_TODOS_ERROR:{
        return{
            ...state,
            loading:false,
            error:true,
            todos:[]

        }
    }
    case ADD_TODOS_LOADING:{
        return{
            ...state,
            loading:true,
            error:false,
           
        }

    }
    case ADD_TODOS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            
        }

    }
      default:{
          return{...state}
      }

    }
}