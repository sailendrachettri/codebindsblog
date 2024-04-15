import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom' 
import Editor from '../../Editor';
import { SERVER_URL } from '../../environment';

const CreateBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");

    // ---------------------------methods---------------------------
    const createNewPost = async(e)=>{
        e.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);


        const response = await fetch(`${SERVER_URL}/api/blog/create`, {
            method: 'POST',
            body: data, 
            credentials: 'include'
            
        })

        if(response.ok){
            navigate("/");
        }
    }
    

    return (
        <>
            <form  onSubmit={createNewPost} className='container'>
                <div className="form-group">
                    <input type="text" className="form-control my-4" name='title' id="title" aria-describedby="textHelp" placeholder="Enter title" value={title} onChange={ev => setTitle(ev.target.value)} minLength={3} />
                    <input type="summary" className="form-control my-4" name='summary' id="summary" aria-describedby="textHelp" placeholder="Enter summary" value={summary}  onChange={ev => setSummary(ev.target.value)} minLength={5} />
                    <input type="file" className="form-control my-4" name='cover' onChange={ev => setFiles(ev.target.files)} required/>
                    <Editor value={content} onChange={setContent} />
                    <button className='my-4 w-100 btn btn-dark'>Create Blog</button>
                </div>
            </form>
        </>
    )
}


export default CreateBlog 