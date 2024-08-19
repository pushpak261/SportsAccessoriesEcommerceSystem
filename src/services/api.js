import axios from "axios";

// Auth APIs
export function registerUser(user) {
    return axios.post('http://localhost:8080/auth/register', user);
}

// export function loginUser(user) {
//     return axios.post('http://localhost:8080/auth/login', user);
// }

// Admin APIsa
export function addProduct(product) {
    return axios.post('http://localhost:8080/admin/products', product);
}

export function updateProduct(product_id, product) {
    return axios.put(`http://localhost:8080/admin/products/${product_id}`, product);
}

export function removeProduct(product_id) {
    return axios.delete(`http://localhost:8080/admin/products/${product_id}`);
}

export function addCategory(category) {
    return axios.post('http://localhost:8080/admin/categories', category);
}

export function updateCategory(category_id, category) {
    return axios.put(`http://localhost:8080/admin/categories/${category_id}`, category);
}

export function removeCategory(category_id) {
    return axios.delete(`http://localhost:8080/admin/categories/${category_id}`);
}

export function getAllCategories() {
    return axios.get('http://localhost:8080/admin/categories');
}

export function getAllProducts() {
    return axios.get('http://localhost:8080/admin/products');
}

export function getAllOrders() {
    return axios.get('http://localhost:8080/admin/orders');
}

export function getAllPayments() {
    return axios.get('http://localhost:8080/admin/payments');
}

export function getAllReviews() {
    return axios.get('http://localhost:8080/admin/reviews');
}

// User APIs
export function getUserById(user_id) {
    return axios.get(`http://localhost:8080/api/users/${user_id}`);
}

export function updateUser(user_id, user) {
    return axios.put(`http://localhost:8080/api/users/${user_id}`, user);
}

export function deleteUser(user_id) {
    return axios.delete(`http://localhost:8080/api/users/${user_id}`);
}

export function getCart(user_id) {
    return axios.get(`http://localhost:8080/api/users/${user_id}/cart`);
}

export function addToCart(user_id, cart) {
    return axios.post(`http://localhost:8080/api/users/${user_id}/cart`, cart);
}

export function updateCartItem(user_id, product_id, cart) {
    return axios.put(`http://localhost:8080/api/users/${user_id}/cart/${product_id}`, cart);
}

export function removeFromCart(user_id, product_id) {
    return axios.delete(`http://localhost:8080/api/users/${user_id}/cart/${product_id}`);
}

export function placeOrder(order) {
    return axios.post('http://localhost:8080/api/users/orders', order);
}

export function makePayment(payment) {
    return axios.post('http://localhost:8080/api/users/payments', payment);
}

export function submitReview(review) {
    return axios.post('http://localhost:8080/api/users/reviews', review);
}

export function getUserProducts() {
    return axios.get('http://localhost:8080/api/users/products');
}
