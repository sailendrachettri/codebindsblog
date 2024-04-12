import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from "../environment";
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

        const { username, password } = credentials;
        try {
            props.setProgress(30);
            const response = await fetch(`${SERVER_URL}/api/auth/login`, {
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
        <div className='min-vh-100'>
            <form className='login-signup-form' onSubmit={handleSubmit}>
                <h1>Welcome Author</h1>
                <div>
                    <input type="text" id="username" name="username" placeholder='username' value={credentials.username} onChange={onChange} required autoComplete='off' />
                    <input type="password" id="password" name="password" placeholder='password' value={credentials.password} onChange={onChange} required />
                    <button type='submit' onClick={handleLoading}>{loading}</button>
                    <p className='text-danger text-center'>Restricted Access: Authors Only!</p>
                </div>
            </form>
        </div>
    )
}