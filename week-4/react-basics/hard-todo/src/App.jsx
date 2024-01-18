import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let id =1;
export default function App() {
  const [todos, setTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  function addTodo(){
    if(title && desc){//checks if both title and description have truthly values or not
      const newTodo ={id,title,desc};
      setTodo([...todos, newTodo]);
      id++;
      setTitle('');
      setDesc('');
    }
    alert("Todo added successfully");
  }

  return(
    <div>
      <div className="add">
        Title : <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> <br /> <br />
        Description : <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)}/> <br /> <br />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <Cards todos={todos}/>
    </div>
  )

  function Cards({todos}){
    return(
      <div className="todo-container">
        {
          todos.map((todo)=>(
            <Card todo={todo} id={todo.id}/>
          ))
        }
      </div>
    )
  }

  function Card({todo}){
    return(
      <div id={todo.id} className="todo-container">
        <div>{todo.title}</div>
        <div>{todo.desc}</div>
      </div>
    )
  }
}
