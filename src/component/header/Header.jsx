import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        HQ
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="our-services">
                                    Services
                                </Link>
                            </li> */}
                            <li class="nav-item dropdown">
                            <Link class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                React Hooks 
                            </Link>
                            <ul class="dropdown-menu rounded-0 rounded-bottom bg-body-tertiary border-0">
                                <li><Link class="dropdown-item"  to="user-list">User List</Link></li>
                                <li><Link class="dropdown-item" to="pagi-nation">Pagination</Link></li>
                                <li><Link class="dropdown-item" to="card-pagi">Card Pagination</Link></li>
                                <li><Link class="dropdown-item" to="search">Search Panel</Link></li>
                                <li><Link class="dropdown-item" to="use-context">Use Context</Link></li>
                                <li><Link class="dropdown-item" to="use-context-data">Use Context Data</Link></li>
                                <li><Link class="dropdown-item" to="use-memo">Use Memo</Link></li>
                                <li><Link class="dropdown-item" to="use-callback">Use Callback</Link></li>
                                <li><Link class="dropdown-item" to="use-fetch">Use Fetch Data</Link></li>
                                <li><Link class="dropdown-item" to="use-reducer">Use Reducer</Link></li>
                            </ul>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="about-us">
                                Custome Hook 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="contact-us">
                                Contact Us
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="sign-up">
                                Sign Up
                            </Link>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <Link className="btn btn-outline-dark" to="sign-up" type="submit">
                            Sign Up
                        </Link>&nbsp;
                        <Link className="btn btn-outline-dark" type="submit">
                            Log In
                        </Link>
                    </form>
                </div>
            </div>
        </nav >


        </>
    )
}
