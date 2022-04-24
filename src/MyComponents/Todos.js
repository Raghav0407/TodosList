import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let mystyle = {
        minheight: "70vh",
        margin:"40px auto"
    }
    return (
        <div className="container" style={mystyle}>
            <h3 className="text-center my-3 ">Todos List</h3>
            {props.todos.length===0?"No todos to display":

            props.todos.map((todos)=>{
            return <TodoItem todo={todos} onDelete={props.onDelete}/>
            })
            }
            
            
        </div>
    )
}
