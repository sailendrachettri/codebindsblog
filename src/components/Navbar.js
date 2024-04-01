import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">LearnLLM</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="https://github.com/parthaPRay/LLM-Learning-Sources">Original Docs</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="#"></Link>
                            </li> */}
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Blogs</Link></li>
                                    <li><Link class="dropdown-item" to="#">Articles</Link></li>
                                    <li><Link class="dropdown-item" to="#">Downloads</Link></li>
                                    <li><Link class="dropdown-item" to="#">Youtube channels</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="#">Documentations</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                        <div className='d-flex align-items-center'>
                            <span className='px-3'>Welcome, <span className='text-success'>Guest</span></span>
                            <Link to="https://github.com/sailendrachettri/llm-resources" target='_blank' className='text-decoration-none text-dark'>Fork on Github</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
