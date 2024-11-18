import axios from 'axios'
import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';


export const Sign = () => {
    const full_name = useRef(null)
    const email_id = useRef(null)
    const mob_num = useRef(null)
    const password = useRef(null)

    const formSubmit=(event)=>{
        event.preventDefault();
        // console.log(full_name.current.value);
        const data={
            full_name: full_name.current.value,
            email_id: email_id.current.value,
            mob_num: mob_num.current.value,
            password: password.current.value,
        }
        // console.log(data);
        
        axios.post("http://localhost:3004/user",data)
            .then((res)=>{
                if(res.status==200 || res.status==201){
                    toast.success("Sign up Succefully")

                }
                else {
                    toast.error("Sign up Not Succefully")
                }
            })
        
    }

    return (
        <div> 
            <div className='my_title'>Sign Up Here</div>
            <div className="container">
            <Toaster/>
                <div className="row" >
                    <div className="col-md-4"></div>
                    <div className="col-md-4" style={{backgroundColor:"lightgrey", borderRadius:"10px"}}>
                        <form action="" onSubmit={formSubmit}>
                            <div class="mb-3 mt-4">
                                <label for="formGroupExampleInput" class="form-label">Full Name</label>
                                <input type="text" ref={full_name} class="form-control" id="formGroupExampleInput"/>
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label">Email Id</label>
                                <input type="email" ref={email_id} class="form-control" id="formGroupExampleInput2"/>
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label">Mobile Number</label>
                                <input type="text" ref={mob_num} class="form-control" id="formGroupExampleInput2"/>
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label">Password</label>
                                <input type="password" ref={password} class="form-control" id="formGroupExampleInput2"/>
                            </div>
                            <div class="mb-3 mb-4" style={{textAlign:"center"}}>                       
                                <input type="submit" value="Sign Up" class="btn btn-dark" style={{height:"40px", width:"120px"}} id="formGroupExampleInput2"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-"></div>
                </div>
            </div>
            </div>
    )
}
