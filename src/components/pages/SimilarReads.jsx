import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { SERVER_URL } from '../../environment';
import { Link } from 'react-router-dom';

const SimilarReads = () => {
    const [posts, setPosts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${SERVER_URL}/api/post/fetchtopfiveposts`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
                setLoading(false);
            });
        }).catch((err) => {
            setLoading(false);
            console.log("Failed to fetch posts");
        })
    }, []);
    useEffect(() => {
        fetch(`${SERVER_URL}/api/blog/fetchtopfiveblog`).then(response => {
            response.json().then(blogs => {
                setBlogs(blogs);
                setLoading(false);
            });
        }).catch((err) => {
            setLoading(false);
            console.log("Failed to fetch posts");
        })
    }, []);

    return (
        <>
            <h1 className='mt-5 mb-3'>Similar Reads</h1>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    {
                        !loading ?
                            blogs.length > 0 && blogs.map((post, i) => (
                                <div className="card mt-4 bg-light text-primary" key={i}>
                                    <div className="card-body">
                                        <Link to={`/blogpost/${post._id}`} key={i} target='_blank' className='card-title lh-sm text-decoration-none'>{post.title}</Link>
                                    </div>
                                </div>
                            ))
                            : <>
                                <Skeleton count={2} />
                                <br />
                                <Skeleton count={2} />
                            </>
                    }

                </div>
                <div className="col-sm-6">
                    {
                        !loading ?
                            posts.length > 0 && posts.map((post, i) => (
                                <div className="card mt-4 bg-light text-primary" key={i}>
                                    <div className="card-body">
                                        <Link to={`/card/${post._id}`} key={i} target='_blank' className='card-title lh-sm text-decoration-none'>{post.title}</Link>
                                    </div>
                                </div>
                            ))
                            : <>
                                <Skeleton count={2} />
                                <br />
                                <Skeleton count={2} />
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default SimilarReads