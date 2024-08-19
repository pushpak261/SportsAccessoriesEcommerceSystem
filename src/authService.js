import axios from 'axios';

export function registerUser(user) {
    return axios.post('http://localhost:8080/auth/register', user);
}

export function loginUser(user) {
    return axios.post('http://localhost:8080/auth/login', user);
}