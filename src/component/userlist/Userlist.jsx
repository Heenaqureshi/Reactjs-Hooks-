import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



export const Userlist = () => {
    const [store, setStore]=useState([])

    const getAllData=()=>{
        axios.get("http://localhost:3004/contact")
        .then((res)=>{
            console.log(res);
            setStore(res.data)
        })

    }
    

    useEffect(()=>{
       getAllData()
      
       

    },[])

    const delteRecord=(id)=>{
       
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("http://localhost:3004/contact/"+id)
                .then((res)=>{
                    // console.log(res);
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          getAllData()
                })       
            }
          });
        
    }
    
      return (
    <>
    <div className='my_title'>Userlist</div>
    <div className="container-fluid">
        <div className="row">         
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <table class="table table-dark table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Mobile No.</th>
                        <th>Course</th>
                        <th>Branch</th>
                        <th>Message</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            store.map((item,index)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.f_name}</td>
                                <td>{item.l_name}</td>
                                <td>{item.email_id}</td>
                                <td>{item.mob_num}</td>
                                <td>{item.course}</td>
                                <td>{item.branch}</td>
                                <td>{item.message}</td>
                                <td>
                                <Link to={`/edit/${item.id}`}  class='btn btn-success'>Edit</Link>
                                </td>
                                <td>
                                <a class='btn btn-danger' onClick={()=>{delteRecord(item.id)}}>Delete</a>
                                </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    </>
  )
}
