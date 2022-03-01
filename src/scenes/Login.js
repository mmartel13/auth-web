import { useState } from 'react';
import bcrypt from 'bcryptjs';


const salt = '$2b$10$3FTLkTiGheAPzxBhYzP3cu'

export default function Login({ setToken, setIsUser }) {//need set token, bc when user logs in we need to set their token
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault() //when you submit the form you don't want it to default reload the same form. We want it to do another action
        const hashedPassword = bcrypt.hashSync(password, salt)
        fetch('http://localhost:3001/users/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password: hashedPassword })
        })
        .then(response => response.json())
        .then(data => setToken(data.token))
        .catch(alert)
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label><br />
                <label>Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label><br />
                    <input type="submit" value="Login" />
            </form>
            <button onClick={() => setIsUser(false)}>Signup</button>
        </>
    )
}