import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../environment';
import dateFormat from 'dateformat'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


const Qnamenu = () => {
    const [posts, setPosts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${SERVER_URL}/api/post/fetchpost`).then(response => {
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
        fetch(`${SERVER_URL}/api/blog/allfetchpost`).then(response => {
            response.json().then(blogs => {
                setBlogs(blogs);
                setLoading(false);
            });
        }).catch((err) => {
            setLoading(false);
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
                        <div key={i}>
                            <p style={{margin: 0}} className='text-secondary'>{dateFormat(post.updatedAt, "mmmm yyyy")}</p>
                            <Link to={`/card/${post._id}`} key={i} target='_blank' className='lh-sm text-decoration-none'>{post.title}</Link>
                            <hr />
                        </div>
                    ))
                }
            </div>

            <h3 className='my-5'>Recent Blogs</h3>
            <div className='border-start px-1'>
                {
                    blogs.length > 0 && blogs.map((post, i) => (
                        <div key={i}>
                            <p style={{margin: 0}} className='text-secondary'>{dateFormat(post.updatedAt, "mmmm yyyy")}</p>
                            <Link to={`/blogpost/${post._id}`} key={i} target='_blank' className='lh-sm text-decoration-none'>{post.title}</Link>
                            <hr />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Qnamenu