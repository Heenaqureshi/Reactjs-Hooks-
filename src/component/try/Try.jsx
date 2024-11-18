import React from 'react'
import { useFetch } from '../customhook/useFetch'


export const Try = () => {
    const [data]=useFetch("https://jsonplaceholder.typicode.com/comments")
  return (
    <>
    <div className='my_title'>Try</div>
    <ul>
        {
            data.map((item,index)=>
            <li style={{color:"black"}}>{item.id+ " "+item.name+" "+item.email}</li>
            )
        }
    </ul>
    </>
  )
}
