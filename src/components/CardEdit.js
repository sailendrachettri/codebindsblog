import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../Editor';
import { toast } from 'react-toastify'
import { SERVER_URL } from '../environment';

const CardEdit = () => {
    const { id } = useParams();

    // hooks
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");

    // fetch the user content
    useEffect(() => {
        fetch(`${SERVER_URL}/api/post/card/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setSummary(postInfo.summary);
                    setContent(postInfo.content);
                })
            })
    }, [id]);

    // methods
    const updatePost = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);

        if (files?.[0]) {
            data.set('file', files?.[0]);
        }

        try {

            // now put the edited content in database
            const response = await fetch(`${SERVER_URL}/api/post/edit`, {
                method: 'PUT',
                body: data,
                credentials: 'include'
            })

            console.log('card/' + id);

            if (response.ok) {
                navigate("/card/" + id);
                toast.success("Post Edited successfully!");
            }

            else {
                toast.error("You are not an author of this post!");
            }


        } catch (err) {
            toast.error("Internal server error");
        }

    }

    return (
        <>
            <form onSubmit={updatePost} className='container'>
                <div className="form-group">
                    <input type="text" className="form-control my-4" name='title' id="title" aria-describedby="textHelp" placeholder="Enter title" value={title} onChange={ev => setTitle(ev.target.value)} />
                    <input type="summary" className="form-control my-4" name='summary' id="summary" aria-describedby="textHelp" placeholder="Enter summary" value={summary} onChange={ev => setSummary(ev.target.value)} />
                    <input type="file" className="form-control my-4" name='cover' onChange={ev => setFiles(ev.target.files)} />
                    <Editor value={content} onChange={setContent} />
                    <button className='my-4 w-100 btn btn-dark' >Update Post</button>
                </div>
            </form>
        </>
    )
}

export default CardEdit