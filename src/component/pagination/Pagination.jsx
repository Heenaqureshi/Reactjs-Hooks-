import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

export const Pagination = () => {
    const [state, setState] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal]= useState(0);

    const getTotal=( async()=>{
        try{
            let response = await axios.get("http://localhost:3004/contact")
            setTotal(response.data.length /5);
        }
        catch(error){
            console.log(error);
            
        }
    })
    getTotal();
    // OR
    // const getTotal=()=>{
    //     axios.get("http://localhost:3004/contact")
    //     .then((res)=>{
    //         console.log(res);
            
    //     })
    // }
 
    const getData=( async()=>{
        try{
            let response = await axios.get("http://localhost:3004/contact/?_page="+page+"&_limit=5")
            setState(response.data)
        }
        catch(error){
            console.log(error);
            
        }
    })
    useEffect(()=>{
        getData();
    },[page])

    getTotal();

    const handlePageClick=(data)=>{
        setPage(data.selected + 1);
    }

  return (
    <>
        <div className='my_title'>Pagination</div>
        <div className="container">
        <div className="row">         
            <div className="col-md-12">
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
                    </tr>
                    </thead>
                    <tbody>
                        {
                            state.map((item,index)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.f_name}</td>
                                <td>{item.l_name}</td>
                                <td>{item.email_id}</td>
                                <td>{item.mob_num}</td>
                                <td>{item.course}</td>
                                <td>{item.branch}</td>
                                <td>{item.message}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <div style={{textAlign:'center'}}>
                <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel= {'Next'}
                        breakLabel={'...'}
                        pageCount={total}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={6}
                        onPageChange={handlePageClick}
                       containerClassName={'pagination'}
                       pageClassName={'page-item'}
                       pageLinkClassName={'page-link'}
                       previousClassName={'page-item'}
                       previousLinkClassName={'page-link'}
                       nextClassName={'page-item'}
                       nextLinkClassName={'page-link'}
                       breakClassName={'page-item'}
                       breakLinkClassName={'page-link'}
                       activeClassName={'active'}
                />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
