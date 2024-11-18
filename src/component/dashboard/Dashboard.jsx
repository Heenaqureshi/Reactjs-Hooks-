import React, { useState } from 'react'
import axios, { Axios } from 'axios'


export const Dashboard = () => {
  const [color,setColor]=useState("Red")
  console.log(useState("Red"));

  const [state,setState]=useState({
    name: "Heena",
    course: "React Js",
    fee: 15000
  })

  const[store,setStore]=useState([])

  const changeData=()=>{
    setState({course: "JavaScript"})
  }

  const getLiveData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res)=>{
        // console.log(res);
        setStore(res.data)
        
      })
    
  }
  const changeColor=()=>{
      // alert("HI")
      setColor("Blue")
     
  }
  
  return (
    <>
      <div style={{textAlign:"center"}}>
        {color}
        <br />
        <br />
        <input type="submit" value="change color" onClick={changeColor} />
        <br />
        <br />
        {state.name+" yours "+state.course+" fee is "+state.fee}
        <br />
        <br />
        <input type="submit" value="change Data" onClick={changeData} />
        <br />
        <br />
        <input type="submit" value="Get Live Data" onClick={getLiveData} />
        <br />
        <br />
        <ul>
          {
            store.map((item,index)=>
            <li>{item.id+" "+item.name+" "+item.email+" "+item.body}</li>
            )
          }
        </ul>
      </div>
    </>
  )
}
