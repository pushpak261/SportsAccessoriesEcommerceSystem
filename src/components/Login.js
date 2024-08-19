import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import loginvalidation from "../validations/loginvalidation";

const LoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [errmsg, setErrmsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
    setPasswordType(showPassword ? "password" : "text");
  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginvalidation(user));
    setSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      axios.post("http://localhost:8080/api/login", {
        username: user.username,
        password: user.password,
      })
        .then((resp) => {
          const result = resp.data;
          localStorage.setItem("userid", result.userid);
          localStorage.setItem("uname", result.uname);
          localStorage.setItem("role", result.role);
          localStorage.setItem("token", result.token); // Store JWT token
          dispatch({ type: "USER_LOGIN_SUCCESS" });
          navigate("/profile");
        })
        .catch((error) => {
          setErrmsg("Invalid username or password..!!");
          dispatch({
            type: "USER_LOGIN_FAILURE",
            payload: "Login failed. Please try again.",
          });
        });
    }
  }, [errors, submitted, dispatch, navigate, user]);

  return (
    <div className="container">
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter Username"
            value={user.username}
            onChange={handleInput}
          />
          {errors.username && (
            <small className="text-danger d-inline-block">
              {errors.username}
            </small>
          )}
        </Form.Group>

        <Form.Group className="my-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={passwordType}
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleInput}
            />
            <Button onClick={showPasswordHandler} variant="outline-secondary">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputGroup>
          {errors.password && (
            <small className="text-danger d-inline-block">{errors.password}</small>
          )}
        </Form.Group>

        {errmsg && (
          <div className="text-danger my-2">{errmsg}</div>
        )}

        <Button variant="success" className="my-3" type="submit">
          Login Now
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
