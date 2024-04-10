import React, { useEffect, useState } from 'react'
import SinglePost from './Card'

export const Cards = () => {
    // variables

    // hooks
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/post/fetchpost').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    
    return (
        <>
            <div className='container-fluid d-flex justify-content-center flex-wrap mt-3'>
                <h2>Learn Large Language Model</h2>
                <p className='mb-4 mx-3'>A large language model (LLM) is a deep learning algorithm that can perform a variety of natural language processing (NLP) tasks.</p>
                
                {
                    posts.length > 0  && posts.map((post, i) =>(
                        <SinglePost {...post} key={i} />
                    ))
                }
            </div >
        </>
    )
}
