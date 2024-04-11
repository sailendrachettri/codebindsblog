import React, { useEffect, useState } from 'react'
import Card from './Card'
import { SERVER_URL } from '../environment';

export const Cards = () => {
    // variables

    // hooks
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${SERVER_URL}/api/post/fetchpost`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    
    return (
        <>
            <div className='container-fluid d-flex justify-content-center flex-wrap mt-3'>
                <h2>Learn Large Language Model</h2>
                <p className='mb-4 mx-3 lh-lg' style={{textAlign: 'justify'}}>Large language models are advanced artificial intelligence systems capable of understanding and generating human-like text. They're trained on vast amounts of data and can perform various language-related tasks such as translation, summarization, and conversation. These models have achieved significant breakthroughs in natural language processing and are used in applications ranging from chatbots to content generation, and even in scientific research.</p>
                {
                    posts.length > 0  && posts.map((post, i) =>(
                        <Card {...post} key={i} />
                    ))
                }
            </div >
        </>
    )
}
