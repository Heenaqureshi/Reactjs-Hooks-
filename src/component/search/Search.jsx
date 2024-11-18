import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Search = () => {
    const [state, setState] = useState([])
    const [store, setStore] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3004/contact")
        .then((res)=>{
            setState(res.data)
        })
    },[]) 
    
    const searchById = (event) => {
        let id = event.target.value;
        // alert(id)
        axios.get("http://localhost:3004/contact/"+id)
        .then((res)=>{
            setStore(res.data)
            
        })
    }

    const searchByMobileNum = (event) => {
        let id = event.target.value;
        axios.get("http://localhost:3004/contact/"+id)
        .then((res)=>{
            setStore(res.data)
            
        })

    }

    const searchByEmailID = (event) => {
        let id = event.target.value;
        axios.get("http://localhost:3004/contact/"+id)
        .then((res)=>{
            setStore(res.data)
            
        })

    }
  return (
    <>
    <div className='my_title'>Search</div>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <select name="" id="" className='form-control' onChange={searchById}>
                    <option value="">Select Id...</option>
                    {
                        state.map((item,index)=>
                            <option value={item.id}>{item.id}</option>
                        )
                    }
                </select>
            </div>
            <div className="col-md-4">
            <select name="" id="" className='form-control' onChange={searchByMobileNum} >
                    <option value="">Select Mobile Number...</option>
                    {
                        state.map((item,index)=>
                            <option value={item.id}>{item.mob_num}</option>
                        )
                    }
                </select>
            </div>
            <div className="col-md-4">
            <select name="" id="" className='form-control' onChange={searchByEmailID}>
                    <option value="">Select Email Id...</option>
                    {
                        state.map((item,index)=>
                            <option value={item.id}>{item.email_id}</option>
                        )
                    }
                </select>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
            <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Mobile Num</th>
                            <th>Course</th>
                            <th>Branch</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { */}
                            <tr>
                            {/* store.map((item,index)=> */}
                                <td>{store.id}</td>
                                <td>{store.f_name}</td>
                                <td>{store.l_name}</td>
                                <td>{store.email_id}</td>
                                <td>{store.mob_num}</td>
                                <td>{store.course}</td>
                                <td>{store.branch}</td>
                                <td>{store.message}</td>
                            {/* ) */}
                            </tr>
                        {/* } */}
                    </tbody>
            </table>
            </div>
        </div>
    </div>
    </>
  )
}
