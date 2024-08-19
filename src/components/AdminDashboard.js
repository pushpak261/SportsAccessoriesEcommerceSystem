import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getAllProducts, getAllCategories, removeProduct, removeCategory } from '../apiService';

function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await getAllProducts();
                setProducts(productResponse.data);

                const categoryResponse = await getAllCategories();
                setCategories(categoryResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to fetch data. Please try again later.');
            }
        };

        fetchData();
    }, []);

    const handleRemoveProduct = async (id) => {
        try {
            await removeProduct(id);
            setProducts(products.filter(({ id: productId }) => productId !== id));
        } catch (error) {
            console.error('Error removing product:', error);
            alert('Failed to remove product. Please try again later.');
        }
    };

    const handleRemoveCategory = async (id) => {
        try {
            await removeCategory(id);
            setCategories(categories.filter(({ id: categoryId }) => categoryId !== id));
        } catch (error) {
            console.error('Error removing category:', error);
            alert('Failed to remove category. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>

            <h3>Products</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({ id, name, price }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</td>
                            <td>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleRemoveProduct(id)}
                                    aria-label={`Remove product ${name}`}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h3>Categories</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(({ id, name }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleRemoveCategory(id)}
                                    aria-label={`Remove category ${name}`}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default AdminDashboard;
