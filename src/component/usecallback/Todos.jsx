import React from "react";
import { memo } from "react";

 const Todos = ({todos, addTodo}) => {

        console.log("child render");
        
  return (
    <div align="center">
        <div className='my_title'>Todos</div>
        {
            todos.map((todo, index)=>{
                return <p key={index}>{todo + index}</p>
            })
        }

        <button className='btn btn-dark' onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todos)