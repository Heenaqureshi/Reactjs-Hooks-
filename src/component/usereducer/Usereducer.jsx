import React, { useReducer } from 'react'

const initialState = 0
const initialState1 = "Red";

const reducer = (state, action)=>{
  console.log(state + " "+ action.type);
  // if(action.type==="INCREMENT"){
  //   return state+1
  // }
  // if(action.type==="DECREMENT"){
  //   return state-1
  // }
  // if(action.type==="CHANGE"){
  //   return state="Blue"
  // }
  // return state
  switch(action.type)
  {
    case 'INCREMENT':
            return state+1 
        break;
    case 'DECREMENT':
            return state-1 
        break;
    case 'CHANGE':
            return state="Blue"

        break;
    default:
            return state;
        break;

  }
  
}
export const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer,initialState)
  const [color, dispatch1] = useReducer(reducer,initialState1)

  return (
    <div align="center">
        <div className='my_title'>Usereducer</div>
        <p>{state}</p>
        <input type="submit" value="Increment" onClick={()=>{dispatch({type:"INCREMENT"})}}  className='btn btn-dark'/>&nbsp;
        <input type="submit" value="Decrement" onClick={()=>{dispatch({type:"DECREMENT"})}} className='btn btn-dark' />
        <hr />
        <p>{color}</p>
        <input type="submit" value="Change Color" onClick={()=>{dispatch1({type:"CHANGE"})}} className='btn btn-danger' />
        

    </div>
  )
}
