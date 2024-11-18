import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './edit.css'
import axios from 'axios'

export const Edit = () => {
  const [state, setState] = useState({
    f_name: "",
    l_name: "",
    email_id: "",
    mob_num: "",
    course: "",
    branch: "",
    message: "",
  })

  const _useNavigate =useNavigate();

  const {id}=useParams()
  

  useEffect(()=>{
    axios.get("http://localhost:3004/contact/"+id)
      .then((res)=>{
        setState(res.data)
    })
  },[])

  const handler=(event)=>{ 
      const {name,value}=event.target;
      setState({...state,[name]:value})
  }

  const updateData=(event)=>{
    event.preventDefault();
    axios.put("http://localhost:3004/contact/"+id,state)
      .then((res)=>{
      _useNavigate("/user-list")
    })
  }

  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" style={{ height: "350px", backgroundColor: "#0082a8", marginTop: "2%" }}>
            <img src="assets/gallery/msg_logo.png" alt="" className='my_img' />
            <h5 className='head_name'><Link to="./" className='contact_home'>Home</Link> - Contact Us - India</h5>
            <h1 className='heading'>Contact Us</h1>
            <h4 className='sub_heading'>We would love to hear from you! Let us know of your experience, and keep in touch. Please fill in the required details and our team will get in touch with you.</h4>
          </div>
        </div>
      </div>
      <div className="container" >
        <div className="row">
          <div className="col-md-10" style={{ height: "250px", backgroundColor: "#234880", marginTop: "2%", borderRadius: "10px" }}>

            <div>
              <ul>
                <h5>Contact Us </h5>
                <li>Submit your query here</li>
                <li>Submit your query</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <form action="" method='post' onSubmit={updateData}>
            <div className="col-md-8 contact_form" >
              <div className="div" style={{paddingLeft:"3%", paddingRight:"3%"}}>
                <div class="row mt-5">
                  <div class="col">
                    <input type="text" value={state.f_name} name="f_name" onChange={handler} class="form-control man_text" placeholder="First name" aria-label="First name" />
                  </div>
                  <div class="col">
                    <input type="text" value={state.l_name} name="l_name" onChange={handler} class="form-control man_text" placeholder="Last name" aria-label="Last name" />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col ">
                    <input type="text" value={state.email_id} name="email_id" onChange={handler} class="form-control man_text" placeholder="Email Id " aria-label="Email Id " />
                  </div>
                  <div class="col ">
                    <input type="text" value={state.mob_num} name="mob_num" onChange={handler} class="form-control man_text" placeholder="Enter Mobile No." aria-label="Enter Mobile No." />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col">
                    <select id="inputState" value={state.course} name="course" onChange={handler} class="form-select man_text">
                      <option selected>Select Course...</option>
                      <option value="C">C</option>
                      <option value="C++">C++</option>
                      <option value="Java">Java</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="React Js">React Js</option>
                    </select>
                  </div>
                  <div class="col">
                    <select id="inputState" value={state.branch} name="branch" onChange={handler} class="form-select man_text">
                      <option selected>Select Branch...</option>
                      <option value="Pitampura">Pitampura</option>
                      <option value="Noida">Noida</option>
                      <option value="South Ex">South Ex</option>
                      <option value="Gurgaon">Gurgaon</option>
                      <option value="Janakpuri">Janakpuri</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <textarea name="message" value={state.message} onChange={handler} id="" placeholder='Please enter remark here' class="form-control"></textarea>
                  </div>
                  <div style={{ marginTop: "2%" }}>
                    <input type="submit" value="Submit" className='btn1' />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
      </>
  )
}
