// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Form, Button, InputGroup } from "react-bootstrap";
// // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import authServices from "../services/authServices";
// // import emailjs from "@emailjs/browser";

// // const Register = () => {
// //   const [username, setUsername] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [address, setAddress] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [passwordType, setPasswordType] = useState("password");
// //   const [role, setRole] = useState("");
// //   const [isValidUsername, setIsValidUsername] = useState(true);
// //   const [isValidPassword, setIsValidPassword] = useState(true);
// //   const [errorMessage, setErrorMessage] = useState("");

// //   const navigate = useNavigate();

// //   const showPasswordHandler = () => {
// //     setShowPassword(!showPassword);
// //     setPasswordType(showPassword ? "password" : "text");
// //   };

// //   const sendAutoReply = (username, password, toEmail, address) => {
// //     emailjs.send(
// //       "service_g8c7soc",
// //       // "template_6vxkaea",a
// //       {
// //         to_email: toEmail,
// //         username: username,
// //         password: password,
// //         address: address,
// //       },
// //       "ViQ-UHtFDV_B_vDFq"
// //     )
// //     .then((result) => {
// //       if (result.status === 200) {
// //         console.log("Email sent successfully", result);
// //       }
// //     })
// //     .catch((error) => {
// //       console.error("Email sending failed", error);
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (isValidUsername && isValidPassword) {
// //       try {
// //         await authServices.register({ username, email, address, password, role });
// //         sendAutoReply(username, password, email, address);
// //         navigate("/login");
// //       } catch (error) {
// //         setErrorMessage("Registration failed. Please try again.");
// //         console.error("Registration error:", error);
// //       }
// //     } else {
// //       setErrorMessage("Invalid username or password.");
// //     }
// //   };

// //   const setUsernameHandler = (username) => {
// //     const isValid = /^[a-zA-Z0-9@]+$/.test(username) && username.length > 4;
// //     setUsername(username);
// //     setIsValidUsername(isValid);
// //   };

// //   const setPasswordHandler = (password) => {
// //     const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
// //     setPassword(password);
// //     setIsValidPassword(isValid);
// //   };

// //   return (
// //     <Form onSubmit={handleSubmit}>
// //       <Form.Group controlId="formUsername">
// //         <Form.Label>Username</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter Username"
// //           value={username}
// //           onChange={(e) => setUsernameHandler(e.target.value)}
// //           required
// //         />
// //         {!isValidUsername && (
// //           <div className="text-danger">
// //             Username should be alphanumeric and more than 4 characters long.
// //           </div>
// //         )}
// //       </Form.Group>

// //       <Form.Group controlId="formEmail">
// //         <Form.Label>Email</Form.Label>
// //         <Form.Control
// //           type="email"
// //           placeholder="Enter Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //       </Form.Group>

// //       <Form.Group controlId="formAddress">
// //         <Form.Label>Address</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter Address"
// //           value={address}
// //           onChange={(e) => setAddress(e.target.value)}
// //           required
// //         />
// //       </Form.Group>

// //       <Form.Group controlId="formPassword">
// //         <Form.Label>Password</Form.Label>
// //         <InputGroup>
// //           <Form.Control
// //             type={passwordType}
// //             placeholder="Enter Password"
// //             value={password}
// //             onChange={(e) => setPasswordHandler(e.target.value)}
// //             required
// //           />
// //           <Button onClick={showPasswordHandler} variant="outline-secondary">
// //             {showPassword ? <FaEyeSlash /> : <FaEye />}
// //           </Button>
// //         </InputGroup>
// //         {!isValidPassword && (
// //           <div className="text-danger">
// //             Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special character.
// //           </div>
// //         )}
// //       </Form.Group>

// //       <Form.Group controlId="formRole">
// //         <Form.Label>Role</Form.Label>
// //         <Form.Control
// //           as="select"
// //           value={role}
// //           onChange={(e) => setRole(e.target.value)}
// //           required
// //         >
// //           <option value="">Select Role</option>
// //           <option value="USER">User</option>
// //           <option value="ADMIN">Admin</option>
// //         </Form.Control>
// //       </Form.Group>

// //       {errorMessage && <div className="text-danger my-2">{errorMessage}</div>}

// //       <Button variant="primary" type="submit">
// //         Register
// //       </Button>
// //     </Form>
// //   );
// // };

// // export default Register;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, Button, InputGroup } from "react-bootstrap";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import authServices from "../services/authServices";
// import emailjs from "@emailjs/browser";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordType, setPasswordType] = useState("password");
//   const [role, setRole] = useState("");
//   const [isValidUsername, setIsValidUsername] = useState(true);
//   const [isValidPassword, setIsValidPassword] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();

//   const showPasswordHandler = () => {
//     setShowPassword(!showPassword);
//     setPasswordType(showPassword ? "password" : "text");
//   };

//   const sendAutoReply = (username, password, toEmail, address) => {
//     emailjs.send(
//       "service_g8c7soc",
//       "template_6vxkaea",
//       {
//         to_email: toEmail,
//         username: username,
//         password: password,
//         address: address,
//       },
//       "ViQ-UHtFDV_B_vDFq"
//     )
//     .then((result) => {
//       if (result.status === 200) {
//         console.log("Email sent successfully", result);
//       }
//     })
//     .catch((error) => {
//       console.error("Email sending failed", error);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isValidUsername && isValidPassword) {
//       try {
//         const { isRegistered, error } = await authServices.register({ username, email, address, password, role });
//         if (isRegistered) {
//           sendAutoReply(username, password, email, address);
//           navigate("/login");
//         } else {
//           setErrorMessage(error);
//         }
//       } catch (error) {
//         setErrorMessage("Registration failed. Please try again.");
//         console.error("Registration error:", error);
//       }
//     } else {
//       setErrorMessage("Invalid username or password.");
//     }
//   };

//   const setUsernameHandler = (username) => {
//     const isValid = /^[a-zA-Z0-9@]+$/.test(username) && username.length > 4;
//     setUsername(username);
//     setIsValidUsername(isValid);
//   };

//   const setPasswordHandler = (password) => {
//     const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
//     setPassword(password);
//     setIsValidPassword(isValid);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formUsername">
//         <Form.Label>Username</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Username"
//           value={username}
//           onChange={(e) => setUsernameHandler(e.target.value)}
//           required
//         />
//         {!isValidUsername && (
//           <div className="text-danger">
//             Username should be alphanumeric and more than 4 characters long.
//           </div>
//         )}
//       </Form.Group>

//       <Form.Group controlId="formEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formAddress">
//         <Form.Label>Address</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formPassword">
//         <Form.Label>Password</Form.Label>
//         <InputGroup>
//           <Form.Control
//             type={passwordType}
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPasswordHandler(e.target.value)}
//             required
//           />
//           <Button onClick={showPasswordHandler} variant="outline-secondary">
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </Button>
//         </InputGroup>
//         {!isValidPassword && (
//           <div className="text-danger">
//             Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special character.
//           </div>
//         )}
//       </Form.Group>

//       <Form.Group controlId="formRole">
//         <Form.Label>Role</Form.Label>
//         <Form.Control
//           as="select"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           required
//         >
//           <option value="">Select Role</option>
//           <option value="Customer">Customer</option>
//           <option value="Admin">Admin</option>
//         </Form.Control>
//       </Form.Group>

//       {errorMessage && (
//         <div className="text-danger my-2">{errorMessage}</div>
//       )}

//       <Button variant="success" type="submit">
//         Register
//       </Button>
//     </Form>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { registerUser } from '../authService'; // Import the function

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        const newUser = {
            username,
            email,
            role: 'admin',  // Role is set as 'USER' by default
            address,
            password
        };

        try {
            const response = await registerUser(newUser); // Use the imported function
            setMessage('User registered successfully!');
            console.log(response.data);
        } catch (error) {
            setMessage('Registration failed. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
