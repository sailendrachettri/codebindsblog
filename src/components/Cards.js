import React, { useEffect, useState } from 'react'
import Card from './Card'
import { SERVER_URL } from '../environment';
import Skeleton from 'react-loading-skeleton';



export const Cards = () => {
    // hooks
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${SERVER_URL}/api/post/fetchpost`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
                setLoading(false);
            });
        }).catch((err)=>{
            setLoading(false);
            console.log("Failed to fetch posts");
        })
    }, []);


    // while loading the content display the skeleton
    if (loading) return (
        <>
            <Skeleton count={5} width={'95%'}/>
            <br />
            <Skeleton count={5} width={'95%'} />
        </>
    )

    // if the content is ready the reutrn the content
    return (
        <>
            <div className='d-flex justify-content-center flex-wrap mt-3'>
                {
                    posts.length > 0 && posts.map((post, i) => (
                        <Card {...post} key={i} />
                    ))
                }

            </div >
        </>
    )
}
