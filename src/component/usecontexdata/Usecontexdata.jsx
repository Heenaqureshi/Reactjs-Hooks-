import React, {useContext } from 'react'
import { createContextData } from '../../App'


export const Usecontexdata = () => {
  const myData = useContext(createContextData)
  return (
    <>
    <ul>{
      myData.map((item, index)=>
        <li style={{color:"black"}} key={index}>{item.id+ " "+item.title+ " "+ item.body}</li>
      )
    }
    </ul>
    </>
  )
}
