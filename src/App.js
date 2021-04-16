
import './App.css';
import Addtodo from './components/AddTodo';
import {Header} from './components/Header';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import  { useState } from 'react'

function App() {

  const onDelete = (todo) => {
    console.log("this is on Delete function", todo);
    setTodos(todos.filter((e) => {
      return(
        e!==todo
      );
    }));
  }

  const [ todos, setTodos] = useState( [
    {
      sno:1,
      title:"go to the market",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      sno:2,
      title:"go to the mountains",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      sno:3,
      title:"go to the movie",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      sno:4,
      title:"go to the mall",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
  ])
  return (
    <div className="App">  
      <Navbar title="hello Raghava" boolean={true}/>
      <Header />
      <Addtodo />
      <Todos todos={todos} onDelete={onDelete} />
     
    </div>
  );
}

export default App;
