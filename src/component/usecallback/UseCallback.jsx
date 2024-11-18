import React, {  useCallback, useState } from 'react'
import Todos from './Todos';

export const UseCallback = () => {
    const [count, setCount]=useState(0);
    const [todos, setTodos]=useState([]);
    const [color, setColor]=useState("Red");

    const increment = () => {
        setCount(count+1)
    };

    // const addTodo = () => {
    //     setTodos((prev)=>[...prev, `New Entry `])
    // };

    const addTodo = useCallback(()=>{
        setTodos((prev)=>[...prev, `New Entry `])
    }, [todos]);

    const changeColor = () => {
        setColor("Pink")
    }

  return (
    <div align="center">
        <div className='my_title'>UseCallback Hook</div>
        <Todos todos={todos} addTodo={addTodo}/>
        <hr />
        <div>
            Count: {count}&nbsp;
            <button onClick={increment} className='btn btn-dark fs-5' style={{borderRadius:"50rem"}} >+</button>
        </div>
        <p>{color}</p>
        <button onClick={changeColor} className='btn btn-dark'>Change Color</button>
        
    </div>
  )
}
