import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    const {id} = useParams();

    // hooks
    const [postInfo, setPostInfo] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/post/card/${id}`).then(response =>{
            response.json().then(postInfo =>{
                setPostInfo(postInfo);
            })
        })
    }, []);

    if(!postInfo) return "No post information available yet!";

    // get the information from postInfo
    const {cover, author, title, content, createdAt} = postInfo;

    return (
        <>
        <img src={`http://localhost:5000/${cover}`} />
        <div>Author: {author.username} Date: {createdAt}</div> 
        <div>{title}</div> 
        <div dangerouslySetInnerHTML={{__html: content}} />
        
        </>
    )
}

export default CardDetails