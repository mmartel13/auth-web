import { useState } from 'react';

export default function SignUp({ setToken, setIsUser }) {//need set token, bc when user logs in we need to set their token
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault() //when you submit the form you don't want it to default reload the same form. We want it to do another action
        fetch('http://localhost:3001/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => setToken(data.token))
        .catch(alert)
    }
    return (
        <>
            <h1>Sing Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label><br />
                <label>Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label><br />
                    <input type="submit" value="Sign up" />
            </form>
            <button onClick={() => setIsUser(true)}>Login</button>
        </>
    )
}