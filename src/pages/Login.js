import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const userCredentials = {
            username,
            password
        };

        try {
            const response = await axios.post('http://localhost:8080/auth/login', userCredentials);
            const token = response.data;
            localStorage.setItem('token', token); // Store JWT token in localStorage

            // Decode token to check the role
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            console.log('Decoded Token:', decodedToken);
            const role = decodedToken.role;

            if (role === 'ADMIN') {
                window.location.href = '/admin-dashboard'; // Navigate to admin dashboard
            } else {
                window.location.href = '/user-dashboard'; // Navigate to user dashboard
            }

            setMessage('Login successful!');
        } catch (error) {
            setMessage('Login failed. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;