
import './App.css';
import Header from "./MyComponents/Header"      ;
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useEffect, useState } from 'react';

function App() {
  let inittodo;
  if(localStorage.getItem("todos"))
  {
    inittodo=[];
  }
  else{
    inittodo=JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete =(todo)=>{
    console.log("I am onDelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo
    }));
  }
  localStorage.getItem("todos");
  const addTodo =(title,desc)=>{
console.log("I am adding  a todo",title,desc);
let sno;
if(todos.length==0)
{
  sno=0;

}
else
{
  sno=todos[todos.length-1].sno+1;
}

const myTodo ={
  sno:sno,
  title:title,
  desc:desc,
}
setTodos([...todos,myTodo]);
console.log(myTodo);

  }
  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    
  }, [todos])
  return (
    <>
   <Header title="My Todos List"/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
