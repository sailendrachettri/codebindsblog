import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../environment';
import dateFormat from 'dateformat'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


const Qnamenu = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${SERVER_URL}/api/post/fetchpost`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
                setLoading(false);
            });
        }).catch((err) => {
            setLoading(false);
            setError(true);
            console.log("Failed to fetch posts");
        })
    }, []);

    if (loading) return (
        <>
            <Skeleton count={2} />
            <br />
            <Skeleton count={2} />
            <br />
            <Skeleton count={2} />
            <br />
            <Skeleton count={2} />
            <br />
            <Skeleton count={2} />
            <br />

        </>
    )

    return (
        <>
            <h3 className='my-5'>Recent articles on AI</h3>
            <div className='border-start px-1'>
                {
                    posts.length > 0 && posts.map((post, i) => (
                        <>
                            <p className='lh-sm text-secondary'>{dateFormat(post.updatedAt, "mmmm yyyy")}</p>
                            <Link to={`/card/${post._id}`} className='lh-sm text-decoration-none'>{post.title}</Link>
                            <hr />
                        </>
                    ))
                }



            </div>
        </>
    )
}

export default Qnamenu