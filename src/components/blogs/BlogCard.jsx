import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom';
const { SERVER_URL } = require('../../environment');

const BlogCard = ({ _id, title, summary, cover, updatedAt }) => {
    return (
        <>
            <div className="card mx-2 my-2 col-md-5 col-sm-8">
                <img src={`${SERVER_URL}/${cover}`} className="card-img-top" style={{ maxHeight: "200px", objectFit: 'cover' }} alt="Card cover" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{ textAlign: 'justify' }}>{(summary.length < 220) ? summary : summary.substring(0, 220) + "(more)"}</p>
                    <p className="card-text text-secondary">Last Updated: {dateFormat(updatedAt, "mmmm d, yyyy")}</p>
                    <Link to={`/card/${_id}`} className="btn btn-outline-dark">Learnmore</Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard