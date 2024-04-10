import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { environment } from "../environment";
import { toast } from 'react-toastify';

export default function Login(props) {
    
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState("Login");

    function onChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleLoading = (e) =>{
        if(credentials.username && credentials.password)
            setLoading("Please wait...");
    }

    async function handleSubmit(e) {
        e.preventDefault();

        props.setProgress(10);

        let URL = "http://localhost:5000"; // default is local

        if(environment === 'prod')
            URL = "https://gtraveller-server.onrender.com";

        const { username, password } = credentials;

        console.log("mer here1 ");
        try {
            props.setProgress(30);
            const response = await fetch(`${URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ username, password })
            })
            props.setProgress(80);

            const data = await response.json();
            if (data.success) {
                console.log("mer here");
                setCredentials({username: "", password : ""})
                toast.success("Logged in successfully!");

                // save the auth-token and redirect
                localStorage.setItem('auth_token', data.auth_token); 
                localStorage.setItem('current_user', data.username); 
                
                props.setProgress(100);
                navigate("/");


            } else {
                props.setProgress(100);

                setLoading("Login")
                toast.error(data.message);
            }

        } catch (error) {
            props.setProgress(100);
            console.log(error);
            
            setLoading("Login")
            toast.error("Internal server error. Please try again later.");
        }
    }

    return (
        <>
            <form className='login-signup-form' onSubmit={handleSubmit}>
                <h1>Welcome Back</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={credentials.username} onChange={onChange} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} required />

                    <button type='submit' onClick={handleLoading}>{loading}</button>

                    <p>Don't have an account yet? <Link to="/register"> Register </Link></p>
                </div>
            </form>
        </>
    )
}