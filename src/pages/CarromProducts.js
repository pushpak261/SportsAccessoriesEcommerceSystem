import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import carromImage1 from '../images/Explore/Carrom/carrom1.png';
import carromImage2 from '../images/Explore/Carrom/carrom2.png';
import carromImage3 from '../images/Explore/Carrom/carrom3.png';
import carromImage4 from '../images/Explore/Carrom/carrom4.png';
import carromImage5 from '../images/Explore/Carrom/carrom5.png';

const carromProducts = [
  {
    id: 1,
    name: 'Professional Carrom Board',
    description: 'High-quality carrom board with smooth surface and sturdy construction.',
    price: 75.00,
    basePrice: 75.00,
    quantity: 1,
    image: carromImage1
  },
  {
    id: 2,
    name: 'Standard Carrom Set',
    description: 'Complete carrom set with board, striker, and coins for casual play.',
    price: 50.00,
    basePrice: 50.00,
    quantity: 1,
    image: carromImage2
  },
  {
    id: 3,
    name: 'Carrom Coins Set',
    description: 'Durable carrom coins set for replacement or additional gameplay.',
    price: 15.00,
    basePrice: 15.00,
    quantity: 1,
    image: carromImage3
  },
  {
    id: 4,
    name: 'Carrom Striker',
    description: 'Smooth and balanced carrom striker for accurate shots.',
    price: 10.00,
    basePrice: 10.00,
    quantity: 1,
    image: carromImage4
  },
  {
    id: 5,
    name: 'Carrom Powder',
    description: 'Fine powder for a smooth playing surface and faster coin movement.',
    price: 5.00,
    basePrice: 5.00,
    quantity: 1,
    image: carromImage5
  },
  // Add more carrom products if needed
];

const CarromProducts = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [products, setProducts] = useState(carromProducts);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const toggleMenuVisibility = useCallback(() => {
    setIsMenuVisible(prevState => !prevState);
  }, []);

  const handleAddToCart = useCallback((product) => {
    setCart(prevCart => [...prevCart, product]);
  }, []);

  const handleIncrementQuantity = useCallback((id) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? {
          ...product,
          quantity: product.quantity + 1,
          price: (product.quantity + 1) * product.basePrice
        } : product
      )
    );
  }, []);

  const handleDecrementQuantity = useCallback((id) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id && product.quantity > 1 ? {
          ...product,
          quantity: product.quantity - 1,
          price: (product.quantity - 1) * product.basePrice
        } : product
      )
    );
  }, []);

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      <div className="nav_bar">
        <div className="nav_item">
          <button className="menu-button" onClick={toggleMenuVisibility} aria-label="Toggle Menu">
            <i className="fas fa-bars"></i>
          </button>
          <p>CARROM<br />PRODUCTS</p>
        </div>

        <button className="cart-button" aria-label="View Cart" onClick={navigateToCart}>
          <i className="fas fa-shopping-cart cart-icon"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
      </div>

      {isMenuVisible && (
        <div className="second_nav_bar">
          <div className="nav_bar2">
            <div className="brand">PROFESSIONAL</div>
            <div className="brand">STANDARD</div>
            <div className="brand">COINS</div>
            <div className="brand">STRIKER</div>
            <div className="brand">POWDER</div>
          </div>
        </div>
      )}

      <div className="container">
        <h2>Carrom Products</h2>
        <div className="row">
          {products.map(product => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
              <div className="card h-100">
                <img className="card-img-top product-image" src={product.image} alt={product.name} />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title product-title">{product.name}</h3>
                  <p className="card-text product-description">{product.description}</p>
                  <p className="product-price">Price: ${product.price.toFixed(2)}</p>
                  <div className="product-quantity">
                    <button className="quantity-button" onClick={() => handleDecrementQuantity(product.id)} aria-label="Decrease Quantity">-</button>
                    <span className="quantity-value">{product.quantity}</span>
                    <button className="quantity-button" onClick={() => handleIncrementQuantity(product.id)} aria-label="Increase Quantity">+</button>
                  </div>
                  <button className="add-to-cart mt-auto" onClick={() => handleAddToCart(product)} aria-label="Add to Cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <p>&copy; 2024 All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CarromProducts;
