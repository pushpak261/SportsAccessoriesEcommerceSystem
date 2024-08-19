import React, { useState, useEffect } from 'react';
import { registerUser } from '../authService'; // Import the function
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate
    const [submitted, setSubmitted] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        const newUser = {
            username,
            email,
            role: 'USER',  // Role is set as 'USER' by default
            address,
            password
        };

        try {
            // Assuming apiRequest is your custom axios instance or fetch
            const response = await registerUser(newUser); // Use the imported function
            setMessage('User registered successfully!');
            toast.success("Customer registered successfully");
            navigate("/login"); // Redirect to login after successful registration
            console.log(response.data);
        } catch (error) {
            setMessage('Registration failed. Please try again.');
            console.error(error);
        }
    };

    useEffect(() => {
        if (submitted) {
            // Logic after form submission, if needed
            console.log("Form submitted!");
        }
    }, [submitted]);

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={(e) => { handleRegister(e); setSubmitted(true); }}>
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
                    <label>Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
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
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;
