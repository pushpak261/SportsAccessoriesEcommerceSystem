import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CricketProducts.css'; 
import batImage from '../images/Explore/Cricket/bat1.jpeg';
import ballImage from '../images/Explore/Cricket/ball.jpg';
import kitImage from '../images/Explore/Cricket/kit1.jpeg';
import shoeImage from '../images/Explore/Cricket/shoe1.jpg';
import helmetImage from '../images/Explore/Cricket/helmet1.jpg';

const initialProducts = [
  {
    id: 1,
    name: 'Cricket Bat',
    description: 'A high-quality cricket bat made from premium wood.',
    price: 120.00,
    basePrice: 120.00,
    quantity: 1,
    image: batImage
  },
  {
    id: 2,
    name: 'Cricket Ball',
    description: 'Durable cricket ball suitable for all types of play.',
    price: 10.00,
    basePrice: 10.00,
    quantity: 1,
    image: ballImage
  },
  {
    id: 3,
    name: 'Cricket Kit',
    description: 'Cricket Kit at lowest Price Ever..',
    price: 70.00,
    basePrice: 70.00,
    quantity: 1,
    image: kitImage
  },
  {
    id: 4,
    name: 'Cricket Shoes',
    description: 'Durable shoes designed for cricket.',
    price: 60.00,
    basePrice: 60.00,
    quantity: 1,
    image: shoeImage
  },
  {
    id: 5,
    name: 'Cricket Helmet',
    description: 'Safety helmet with adjustable padding.',
    price: 50.00,
    basePrice: 50.00,
    quantity: 1,
    image: helmetImage
  },
];

const CricketProducts = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const toggleMenuVisibility = useCallback(() => {
    setIsMenuVisible(prevState => !prevState);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value.toLowerCase());
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

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

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
          <p>ALL<br />SPORTS</p>
        </div>

        <div className="search">
          <form>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search products"
              onChange={handleSearchChange}
            />
          </form>
        </div>

        <button className="cart-button" aria-label="View Cart" onClick={navigateToCart}>
          <i className="fas fa-shopping-cart cart-icon"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
      </div>

      {isMenuVisible && (
        <div className="second_nav_bar">
          <div className="nav_bar2">
            <div className="brand">CRICKET</div>
            <div className="brand">BAT</div>
            <div className="brand">BALL</div>
            <div className="brand">GLOVES</div>
            <div className="brand">PROTECTORS</div>
            <div className="brand">BAG</div>
            <div className="brand">SHOES</div>
          </div>
        </div>
      )}

      <div className="container">
        <h2>Cricket Equipment</h2>
        <div className="row">
          {filteredProducts.map(product => (
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

export default CricketProducts;



