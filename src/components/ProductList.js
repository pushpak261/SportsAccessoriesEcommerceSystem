import React, { useEffect, useState } from 'react';
import { getAllProducts, removeProduct } from '../services/apiService';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await getAllProducts();
        setProducts(response.data);
    };

    const handleDelete = async (id) => {
        try {
            await removeProduct(id);
            fetchProducts(); // Refresh the product list
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
