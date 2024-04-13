import React, { useState } from 'react'
import { SERVER_URL } from "../environment";
import { toast } from 'react-toastify';

const Newslatter = () => {
    // hooks
    const [details, setDetails] = useState({ fullname: "", email: "" });
    const [loading, setLoading] = useState("Submit");

    // methods
    function onChange(e) {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const handleLoading = (e) => {
        if (details.fullname && details.email)
            setLoading("Please wait...");
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const { fullname, email } = details;

        const response = await fetch(`${SERVER_URL}/api/auth/newsletter`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullname, email })
        })

        if (response.ok) {
            response.json().then(details => {
                const user = details.fullname;
                toast.success(`Thannk you ${user} for submitting your email.`);
                setLoading("Submit")
                setDetails({fullname: "", email: ""});
            })
        } else {
            const data = await response.json();
            toast.error(data.message);
            setDetails({fullname: fullname, email: ""});
            setLoading("Submit")
        }

    }

    return (
        <>
            <form className='login-signup-form' onSubmit={handleSubmit}>
                <h3 className='text-secondary'>Get latest updates</h3>
                <div>
                    <input type="text" id="fullname" name="fullname" placeholder='John Doe' value={details.fullname} onChange={onChange} minLength={3} required autoComplete='off'/>
                    <input type="email" id="email" name="email" placeholder='doe@john.com' value={details.email} onChange={onChange} required autoComplete='off' />
                    <button type='submit' onClick={handleLoading}>{loading}</button>
                </div>
            </form>
        </>
    )
}

export default Newslatter