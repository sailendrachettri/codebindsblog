import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = (props) => {

    // variables
    const navigate = useNavigate();


    // methods
    const handleLogout = ()=>{
        localStorage.removeItem('auth_token');
        localStorage.removeItem('current_user');

        handleProgress();

        navigate("/login");
    }

    // illusion for loading progress
    const handleProgress = () =>{
        props.setProgress(15);

        setTimeout(() => {
            props.setProgress(100)
        }, 500);
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={handleProgress}><i className="bi bi-boxes"></i> LearnLLM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={handleProgress}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" target='_blank' to="https://github.com/parthaPRay/LLM-Learning-Sources">Original Docs</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="#"></Link>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Blogs</Link></li>
                                    <li><Link className="dropdown-item" to="#">Articles</Link></li>
                                    <li><Link className="dropdown-item" to="#">Downloads</Link></li>
                                    <li><Link className="dropdown-item" to="#">Youtube channels</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Documentations</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                        <div className='d-flex align-items-center'>
                           { !(localStorage.getItem('auth_token')) ?<span>
                                <Link to="/login" className='btn btn-outline-dark mx-2' onClick={handleProgress}>Login</Link>
                                <Link to="/register" className='btn btn-outline-dark mx-2' onClick={handleProgress}>Register</Link>
                            </span>
                            : <button className='btn btn-outline-dark mx-2' onClick={handleLogout}>Logout</button>
                           }
                            <span className='px-3'>Welcome, <span className='text-success fw-bold'>@{localStorage.getItem('current_user') ? localStorage.getItem('current_user') : "Guest" }</span></span>
                            <Link to="https://github.com/sailendrachettri/llm-resources" target='_blank' className='text-decoration-none text-dark'><i className="bi bi-github"></i> Fork on Github</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
