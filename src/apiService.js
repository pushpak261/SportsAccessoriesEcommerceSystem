import axios from 'axios';

// Base URLs for API requests
const BASE_URL = 'http://localhost:8080/api/users';
const ADMIN_URL = 'http://localhost:8080/admin';

// User API Endpoints
export function updateUser(userId, user) {
    return axios.put(`${BASE_URL}/${userId}`, user);
}

export function deleteUser(userId) {
    return axios.delete(`${BASE_URL}/${userId}`);
}

export function getCart(userId) {
    return axios.get(`${BASE_URL}/${userId}/cart`);
}

export function addToCart(userId, productId, quantity) {
    return axios.post(`${BASE_URL}/${userId}/cart`, null, {
        params: { productId, quantity }
    });
}

export function updateCartItem(userId, productId, quantity) {
    return axios.put(`${BASE_URL}/${userId}/cart/${productId}`, null, {
        params: { quantity }
    });
}

export function removeFromCart(userId, productId) {
    return axios.delete(`${BASE_URL}/${userId}/cart/${productId}`);
}

export function placeOrder(order) {
    return axios.post(`${BASE_URL}/orders`, order);
}

export function makePayment(payment) {
    return axios.post(`${BASE_URL}/payments`, payment);
}

export function submitReview(review) {
    return axios.post(`${BASE_URL}/reviews`, review);
}

// Get a user by ID
export function getUserById(userId) {
    return axios.get(`${BASE_URL}/${userId}`);
}

export function addProduct(product) {
    return axios.post(`${ADMIN_URL}/products`, product);
}

export function updateProduct(productId, product) {
    return axios.put(`${ADMIN_URL}/products/${productId}`, product);
}

export function removeProduct(productId) {
    return axios.delete(`${ADMIN_URL}/products/${productId}`);
}

export function addCategory(category) {
    return axios.post(`${ADMIN_URL}/categories`, category);
}

export function updateCategory(categoryId, category) {
    return axios.put(`${ADMIN_URL}/categories/${categoryId}`, category);
}

export function removeCategory(categoryId) {
    return axios.delete(`${ADMIN_URL}/categories/${categoryId}`);
}

export function getAllCategories() {
    return axios.get(`${ADMIN_URL}/categories`);
}

export function getAllProducts() {
    return axios.get(`${ADMIN_URL}/products`);
}

export function getAllOrders() {
    return axios.get(`${ADMIN_URL}/orders`);
}

export function getAllPayments() {
    return axios.get(`${ADMIN_URL}/payments`);
}

export function getAllReviews() {
    return axios.get(`${ADMIN_URL}/reviews`);
}