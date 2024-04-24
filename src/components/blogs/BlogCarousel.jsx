import React from 'react'
import { Link } from 'react-router-dom';
const { SERVER_URL } = require('../../environment'); 

const BlogCarousel = ({ _id, title, summary, cover }) => {
    return (
        <>
            <Link to={`/blogpost/${_id}`} className="row g-0 position-relative border mb-3 rounded text-decoration-none text-dark">
                <div className="col-md-6 mb-md-0 p-md-4">
                    <img src={`${SERVER_URL}/${cover}`} className="img-fluid rounded adjust-card" alt="Post Cover" />
                </div>
                <div className="col-md-6 p-4 ps-md-0">
                    <h5 className="mt-0">{title}</h5>
                    <p style={{textAlign: 'justify'}}>{summary}</p>
                    <Link to={`/blogpost/${_id}`} className='btn btn-outline-dark'>Read now</Link>
                </div>
            </Link>
        </>
    )
}

export default BlogCarousel