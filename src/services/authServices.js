import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/auth';

const register = async (user) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/register`, user);
    return { isRegistered: true, error: null };
  } catch (error) {
    return { isRegistered: false, error: error.response.data || 'Registration failed' };
  }
};

const login = async (username, password) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/login`, { username, password });
    localStorage.setItem('jwtToken', data.token); // No need to stringify
    return { type: 'USER_LOGIN_SUCCESS', payload: data };
  } catch (error) {
    return { type: 'USER_LOGIN_FAILURE', payload: error.response?.data?.message || 'Login failed' };
  }
};


export default { register, login };
