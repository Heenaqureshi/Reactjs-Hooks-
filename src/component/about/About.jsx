import React from 'react'
import { useFetch } from '../customhook/useFetch'

export const About = () => {
  const [data]=useFetch("https://jsonplaceholder.typicode.com/posts")
  return (
    <>
    <div className='my_title'>About</div>
    <ul>
      {
        data.map((item,index)=>
          <li style={{color:"black"}}>{item.id+ " "+item.title+" "+item.body}</li>
        )
      }
    </ul>
  </>
  )
}
