import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [Title, setTitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e)=>{
     e.preventDefault();
    if(!Title || !desc){
        alert("Title or description cannot be blank");
    }
    else{
        props.addTodo(Title,desc);
        setTitle("");
        setdesc("");
    }
  
    }
    return (
        <div className="container my-3" >
            <h3>Add a todo</h3>
            <form onSubmit ={submit}>
  <div className="mb-3">
    <label htmlFor="title" class="form-label">Todo Title</label>
    <input type="text" value={Title} className="form-control" onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" class="form-label">Todo Desc</label>
    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn  btn-sm btn-success">AddTodo</button>
</form>
        </div>
    )
}
