import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from '../Components/Todo'
import Tododata from '../Components/Tododata'

const MainRoute = () => {
  return (
    <div>
     <Routes>
    <Route path='/' element={<Todo/>}/>
    <Route path="/:id" element={<Tododata/>}/>
   </Routes>
    </div>
  )
}

export default MainRoute