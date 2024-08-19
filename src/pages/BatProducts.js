import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import batImage1 from '../images/Explore/Cricket/bat1.jpeg';
import batImage2 from '../images/Explore/Cricket/bat2.jpg';
import batImage3 from '../images/Explore/Cricket/bat3.jpg';
import batImage4 from '../images/Explore/Cricket/bat4.jpg';
import batImage5 from '../images/Explore/Cricket/bat5.jpg';

const batProducts = [
  {
    id: 1,
    name: 'Cricket Bat - Pro Edition',
    description: 'A high-quality cricket bat made from premium English willow.',
    price: 150.00,
    basePrice: 150.00,
    quantity: 1,
    image: batImage1
  },
  {
    id: 2,
    name: 'Cricket Bat - Elite Edition',
    description: 'A premium-grade bat for professional players, ensuring maximum performance.',
    price: 200.00,
    basePrice: 200.00,
    quantity: 1,
    image: batImage2
  },
  {
    id: 3,
    name: 'Cricket Bat - Classic Edition',
    description: 'A classic cricket bat with a balanced design for all-round play.',
    price: 130.00,
    basePrice: 130.00,
    quantity: 1,
    image: batImage3
  },
  {
    id: 4,
    name: 'Cricket Bat - Limited Edition',
    description: 'A limited edition bat with a unique design and enhanced power.',
    price: 180.00,
    basePrice: 180.00,
    quantity: 1,
    image: batImage4
  },
  {
    id: 5,
    name: 'Cricket Bat - Junior Edition',
    description: 'A lightweight cricket bat designed for junior players.',
    price: 100.00,
    basePrice: 100.00,
    quantity: 1,
    image: batImage5
  },
];

const BatProducts = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [products, setProducts] = useState(batProducts);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const toggleMenuVisibility = useCallback(() => {
    setIsMenuVisible(prevState => !prevState);
  }, []);

  const handleAddToCart = useCallback((product) => {
    setCart(prevCart => [...prevCart, product]);
    console.log('Added to cart:', product); // Debugging line
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

  useEffect(() => {
    console.log('Cart:', cart); // Debugging line to check cart updates
  }, [cart]);

  return (
    <div>
      <div className="nav_bar">
        <div className="nav_item">
          <button className="menu-button" onClick={toggleMenuVisibility} aria-label="Toggle Menu">
            <i className="fas fa-bars"></i>
          </button>
          <p>BAT<br />PRODUCTS</p>
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
            <div className="brand">BAG</div>
            <div className="brand">SHOES</div>
          </div>
        </div>
      )}

      <div className="container">
        <h2>Bat Products</h2>
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

export default BatProducts;
