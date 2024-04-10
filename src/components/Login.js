import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { environment } from "../environment";
import { toast } from 'react-toastify';
import { UserContext } from '../UserContext';

export default function Login(props) {
    
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState("Login");
    const {setUserInfo} = useContext(UserContext);

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
        try {
            props.setProgress(30);
            const response = await fetch(`${URL}/api/auth/login`, {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            })
            props.setProgress(80);

            
            if (response.ok) {
                response.json().then(userInfo =>{
                    setUserInfo(userInfo);
                    navigate("/");
                })

                toast.success("Logged in successfully!");
                
                props.setProgress(100);

            } else {
                props.setProgress(100);

                setLoading("Login")
                toast.error("Something went wrong!");
            }

        } catch (error) {
            props.setProgress(100);
            
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