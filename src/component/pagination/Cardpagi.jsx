import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Cardpagi = () => {
    const [state,setState] = useState([])
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const getTotal = ( async () => {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/photos")
            setTotal(response.data.length /6);
        }
        catch (error) {
            console.log(error);

        }
    })
    getTotal();

    const getData = ( async () => {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/photos/?_page="+page+"&_limit=6")
            setState(response.data);
        }
        catch (error) {
            console.log(error);

        }
    })
    useEffect(() => {
        getData();
    },[page])

    getTotal();

    const handlePageClick = (data) => {
        setPage(data.selected + 1);
    }
    return (
        <>
            <div className='my_title'>Card Pagination</div>
            <div className="container">
                <div className="row">
                    {
                        state.map((item, index) =>
                            <div className="col-md-4">
                                <div class="card" style={{width:"100%"}}>
                                    <img src={item.thumbnailUrl} style={{height:"270px", width:"100%"}} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
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
            
        </>
    )
}
