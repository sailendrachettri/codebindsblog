import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {UserContext} from '../UserContext'

const CardDetails = () => {
    const {id} = useParams();
    const {userInfo} = useContext(UserContext)

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
    const {cover, author, title, content, createdAt, _id} = postInfo;

    return (
        <div className='container'>
        <img src={`http://localhost:5000/${cover}`} />
        <div>Author: {author.username} Date: {createdAt}</div> 
        
        {
        userInfo.id === postInfo.author._id && (
            <Link to={`/edit/${_id}`} className='btn btn-dark'><i class="bi bi-pencil-square"></i> Edit this page </Link> 
        )
        }
        <div>{title}</div> 
        <div dangerouslySetInnerHTML={{__html: content}} />
        
        </div>
    )
}

export default CardDetails