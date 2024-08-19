import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import basketballImage1 from '../images/Explore/BasketBall/ball1.png';
import basketballImage2 from '../images/Explore/BasketBall/ball2.png';
import basketballImage3 from '../images/Explore/BasketBall/ball3.png';
import basketballImage4 from '../images/Explore/BasketBall/ball4.png';
import basketballImage5 from '../images/Explore/BasketBall/ball5.png';

const basketballProducts = [
  {
    id: 1,
    name: 'Official Size Basketball',
    description: 'Durable basketball with a textured surface for improved grip and control.',
    price: 50.00,
    basePrice: 50.00,
    quantity: 1,
    image: basketballImage1
  },
  {
    id: 2,
    name: 'Outdoor Basketball',
    description: 'Designed for outdoor play, this basketball is built to withstand rough surfaces.',
    price: 45.00,
    basePrice: 45.00,
    quantity: 1,
    image: basketballImage2
  },
  {
    id: 3,
    name: 'Indoor/Outdoor Basketball',
    description: 'Versatile basketball suitable for both indoor and outdoor courts.',
    price: 55.00,
    basePrice: 55.00,
    quantity: 1,
    image: basketballImage3
  },
  {
    id: 4,
    name: 'Youth Basketball',
    description: 'Smaller size basketball ideal for young players developing their skills.',
    price: 35.00,
    basePrice: 35.00,
    quantity: 1,
    image: basketballImage4
  },
  {
    id: 5,
    name: 'Premium Leather Basketball',
    description: 'Top-of-the-line leather basketball for professional and high-level play.',
    price: 85.00,
    basePrice: 85.00,
    quantity: 1,
    image: basketballImage5
  },
  // Add more basketball products if needed
];

const BasketballProducts = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [products, setProducts] = useState(basketballProducts);
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
          <p>BASKETBALL<br />PRODUCTS</p>
        </div>

        <button className="cart-button" aria-label="View Cart" onClick={navigateToCart}>
          <i className="fas fa-shopping-cart cart-icon"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
      </div>

      {isMenuVisible && (
        <div className="second_nav_bar">
          <div className="nav_bar2">
            <div className="brand">OFFICIAL</div>
            <div className="brand">OUTDOOR</div>
            <div className="brand">INDOOR/OUTDOOR</div>
            <div className="brand">YOUTH</div>
            <div className="brand">PREMIUM</div>
          </div>
        </div>
      )}

      <div className="container">
        <h2>Basketball Products</h2>
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

export default BasketballProducts;
