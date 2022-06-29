import logo from './logo.svg';
import './App.css';
import {Routes,Route,} from "react-router-dom"
import Tododata from './Components/Tododata';
import Todoitem from './Components/Todoitem';
import Todo from './Components/Todo';
import Navbar from './Components/Navbar';
import MainRoute from './Routes/MainRoute';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
  <MainRoute/>
   {/* <Todo/> */}
    </div>
  );
}

export default App;
