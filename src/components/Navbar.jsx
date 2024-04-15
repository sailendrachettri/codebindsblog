import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext';
import { SERVER_URL } from '../environment';

export const Navbar = (props) => {
    const { userInfo, setUserInfo } = useContext(UserContext);

    // variables
    const navigate = useNavigate();

    // ----------------------------METHODS----------------------------
    // get the looged in user information
    useEffect(() => {
        fetch(`${SERVER_URL}/api/auth/profile`, {
            credentials: 'include',

        }).then(response => {
            response.json().then(userDoc => {
                setUserInfo(userDoc)

            }).catch(() => {
                console.log("Failed to fetch profile information");
            })
        }).finally(() => {
            console.log("Server error - Failed to fetch profile information");
        })
    }, [setUserInfo]);

    const handleLogout = () => {

        fetch(`${SERVER_URL}/api/auth/logout`, {
            credentials: 'include',
            method: 'POST'
        })

        handleProgress();
        setUserInfo(null);

        navigate("/login");
    }

    // sometimes username can be null so for that questino mark
    let username = userInfo?.username;

    // illusion for loading progress
    const handleProgress = () => {
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
                                <Link className="nav-link text-dark" aria-current="page" to="/" onClick={handleProgress}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" target='_blank' to="https://github.com/parthaPRay/LLM-Learning-Sources">Original Docs</Link>
                            </li>
                        </ul>
                        <div className='d-flex align-items-center'>
                            {
                                !username && (
                                    <>
                                        <Link to="/login" className='btn btn-outline-dark mx-2' onClick={handleProgress}><i className="bi bi-shield-lock"></i> Admin Login</Link>
                                        {/* <Link to="/register" className='btn btn-outline-dark mx-2' onClick={handleProgress}>Register</Link> */}
                                    </>
                                )

                            }

                            {
                                username && (
                                    <>
                                        <Link to='/create' className='btn btn-dark mx-2'>Create new Post</Link>
                                        <button className='btn btn-outline-dark mx-2' onClick={handleLogout}>Logout</button>
                                        <span className='px-3'>Welcome, <span className='text-success fw-bold'>@{username}</span></span>
                                    </>
                                )
                            }
                            <Link to="https://github.com/sailendrachettri/llm-resources" target='_blank' className='text-decoration-none text-dark mx-2'><i className="bi bi-github"></i> Fork on Github</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
