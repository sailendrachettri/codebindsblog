import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import dateFormat from 'dateformat'

const {SERVER_URL} = require('../environment');

const CardDetails = () => {
    const { id } = useParams();
    const { userInfo } = useContext(UserContext)

    // hooks
    const [postInfo, setPostInfo] = useState(null);

    useEffect(() => {
        fetch(`${SERVER_URL}/api/post/card/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            })
        })
    }, [id]);

    if (!postInfo) return "No post information available yet!";

    // get the information from postInfo
    const { cover, title, content, createdAt, _id } = postInfo;

    return (
        <div className='container my-4' id='post-page'>
            <img src={`${SERVER_URL}/${cover}`} alt='Cover' className='img-fluid' id='post-cover' />

            <div className='my-4'>
                <span className='text-secondary px-4'>{dateFormat(createdAt, "dddd mmm d, yyyy")}</span>

                {
                    userInfo?.id === postInfo.author?._id && (
                        <Link to={`/edit/${_id}`} className='btn btn-dark'><i className="bi bi-pencil-square"></i> Edit this page </Link>
                    )
                }
            </div>


            <div className='h1 my-4 text-center page-title'>{title}</div>
            <span className='post-content'>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </span>

        </div>
    )
}

export default CardDetails