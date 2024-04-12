import React from 'react'
import img404 from '../assets/404page.svg';

const Page404 = () => {
    return (
        <div className='container-fluid d-flex align-items-center justify-content-center row mt-3'>
            <h1 className='text-danger text-center'>
                Page not found :(
                <div className='mt-3'>
                    <a href='/' className='btn btn-outline-dark w-auto text-decoration-none'>Go to Homepage</a>
                </div>
            </h1>

            <img src={img404} alt='Page not found' className='img-fluid img404' />
        </div>
    )
}

export default Page404