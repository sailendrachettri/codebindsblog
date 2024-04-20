import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import dateFormat from 'dateformat'
import Skeleton from 'react-loading-skeleton'
import Sidemenu from './pages/Sidemenu'

const { SERVER_URL } = require('../environment');

const CardDetails = () => {
    const { id } = useParams();
    const { userInfo } = useContext(UserContext)

    // hooks
    const [postInfo, setPostInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${SERVER_URL}/api/post/card/${id}`).then(response => {
            response.json().then(postInfo => {
                setLoading(false);
                setPostInfo(postInfo);
            })
        }).catch((err) => {
            setError(true);
            setLoading(false);
            console.log("Failed to fetch information");
        })
    }, [id]);

    // show loading skelaton if the content is not ready
    if (loading) return (
        <div className='container my-4' style={{ minHeight: '100rem' }}>
            <Skeleton height={20} />
            <br />
            <Skeleton count={5} />
            <br />
            <Skeleton count={10} />

        </div>
    )

    if (error) return (
        <div style={{ minHeight: "75vh" }}>
            <p className='h1 text-danger my-4 text-center'>Failed to load content</p>
        </div>
    )

    // get the information from postInfo

    const { cover, title, content, updatedAt, _id } = postInfo;


    return (
        <div class="container-fluid row">
            <div class="col-sm-12 col-md-9 text-center order-first">
                <div className='container my-4' id='post-page'>
                    <nav style={{ '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page">Reading</li>
                        </ol>
                    </nav>

                    <img src={`${SERVER_URL}/${cover}`} alt='Cover' className='img-fluid' id='post-cover' />

                    <div className='my-4'>
                        <span className='text-secondary px-4'>Updated on {dateFormat(updatedAt, "dddd mmm d, yyyy")}</span>

                        {
                            userInfo?.id === postInfo.author?._id && (
                                <Link to={`/edit/${_id}`} className='btn btn-dark'><i className="bi bi-pencil-square"></i> Edit this page </Link>
                            )
                        }
                    </div>


                    <h1 className='my-4 text-center page-title'>{title} </h1>
                    <span className='post-content ql-snow'>
                        <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }} />
                    </span>

                </div>
            </div>
            <div class="col-sm-10 col-md-3 order-last">
                <Sidemenu />
            </div>
        </div>

    )
}

export default CardDetails