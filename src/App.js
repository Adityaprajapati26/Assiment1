import logo from './logo.svg';
import './App.css';
import {Routes,Route,} from "react-router-dom"
import Tododata from './Components/Tododata';
import Todoitem from './Components/Todoitem';
import Todo from './Components/Todo';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route path='/' element={<Todoitem/>}/>
    <Route path="/Todo" element={<Todo/>}/>
    <Route path="/Todo/:id" element={<Tododata/>}/>
   </Routes>
    </div>
  );
}

export default App;
