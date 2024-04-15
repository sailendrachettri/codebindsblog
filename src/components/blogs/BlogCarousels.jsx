import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../environment';
import Skeleton from 'react-loading-skeleton';
import BlogCarousel from './BlogCarousel';

export const BlogCarousels = () => {
    // hooks
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${SERVER_URL}/api/blog/fetchpost`).then(response => {
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


    if (error) return (
        <div>
            <p className='h3 my-4 text-danger'>Failed to load content! Please refresh the page</p>
            <button className='btn btn-outline-dark'><a href='/' className='text-decoration-none'>Refresh the page</a></button>

        </div>
    )

    return (
        <>
            {!loading ? <div>
                <div className='d-flex justify-content-center flex-wrap mt-3'>
                    {
                        posts.length > 0 && posts.map((post, i) => (
                            <BlogCarousel {...post} key={i} />
                        ))
                    }

                </div >
            </div>
                : <Skeleton count={10} />
            }
        </>
    )
}
