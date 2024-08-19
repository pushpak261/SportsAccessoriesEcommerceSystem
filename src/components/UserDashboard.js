// // // UserDashboard.js
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Container, Card, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
// // import { getAllProducts, getUserById, addToCart } from '../apiService'; // Import your API functions

// // function UserDashboard() {
// //     const [products, setProducts] = useState([]);
// //     const [user, setUser] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         // Fetch products and user data
// //         const fetchData = async () => {
// //             try {
// //                 const productResponse = await getAllProducts();
// //                 setProducts(productResponse.data);
                
// //                 const userId = 1; // Replace this with dynamic user ID if available
// //                 const userResponse = await getUserById(userId);
// //                 setUser(userResponse.data);
// //             } catch (error) {
// //                 setError('Error fetching data');
// //                 console.error('Error fetching data:', error);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchData();
// //     }, []);

// //     const handleAddToCart = async (productId) => {
// //         if (user) {
// //             try {
// //                 await addToCart(user.id, productId, 1); // Example quantity
// //                 alert('Product added to cart');
// //             } catch (error) {
// //                 console.error('Error adding product to cart:', error);
// //                 alert('Failed to add product to cart');
// //             }
// //         } else {
// //             alert('You need to log in to add items to the cart');
// //         }
// //     };

// //     if (loading) return <Spinner animation="border" variant="primary" />;
// //     if (error) return <Alert variant="danger">{error}</Alert>;

// //     return (
// //         <div>
// //             <header className="navbar">
// //                 <div className="logo">Sports Accessories</div>
// //                 <nav className="nav-container">
// //                     <ul className="nav-links">
// //                         <li><Link to="/home">Home</Link></li>
// //                         <li><Link to="/profile">Profile</Link></li>
// //                         <li><Link to="/orders">Orders</Link></li>
// //                         <li><Link to="/cart">Cart</Link></li>
// //                         <li><Link to="/logout">Logout</Link></li>
// //                     </ul>
// //                 </nav>
// //             </header>

// //             {/* Main Content */}
// //             <Container className="mt-4">
// //                 <h2>Welcome, {user ? user.name : 'Loading...'}</h2>
// //                 <Row>
// //                     {products.map((product) => (
// //                         <Col sm={12} md={6} lg={4} key={product.id}>
// //                             <Card className="mb-4">
// //                                 <Card.Img variant="top" src={product.imageUrl} />
// //                                 <Card.Body>
// //                                     <Card.Title>{product.name}</Card.Title>
// //                                     <Card.Text>
// //                                         {product.description}
// //                                     </Card.Text>
// //                                     <Button 
// //                                         variant="primary" 
// //                                         onClick={() => handleAddToCart(product.id)}
// //                                     >
// //                                         Add to Cart
// //                                     </Button>
// //                                 </Card.Body>
// //                             </Card>
// //                         </Col>
// //                     ))}
// //                 </Row>
// //             </Container>
// //         </div>
// //     );
// // }

// // export default UserDashboard;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Card, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
// import { getAllProducts, getUserById, addToCart } from '../apiService'; // Import your API functions

// // Import images
// import batImage1 from '../images/Explore/Cricket/bat1.jpeg';
// import batImage2 from '../images/Explore/Cricket/bat2.jpg';
// import batImage3 from '../images/Explore/Cricket/bat3.jpg';

// import carromImage1 from '../images/Explore/Carrom/carrom1.png';
// import carromImage2 from '../images/Explore/Carrom/carrom2.png';

// import footballImage1 from '../images/Explore/FootBall/football1.png';
// import footballImage2 from '../images/Explore/FootBall/football1.png';

// import racketImage1 from '../images/Explore/Badminton/racket1.jpg';
// import racketImage2 from '../images/Explore/Badminton/racket2.jpg';

// // Mapping product IDs to images
// const imageMap = {
//     1: batImage1,
//     2: batImage2,
//     3: batImage3,
//     4: carromImage1,
//     5: carromImage2,
//     6: footballImage1,
//     7: footballImage2,
//     8: racketImage1,
//     9: racketImage2,
//     // Add more mappings as needed
// };

// function UserDashboard() {
//     const [products, setProducts] = useState([]);
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch products and user data
//         const fetchData = async () => {
//             try {
//                 const productResponse = await getAllProducts();
//                 setProducts(productResponse.data);
                
//                 const userId = 1; // Replace this with dynamic user ID if available
//                 const userResponse = await getUserById(userId);
//                 setUser(userResponse.data);
//             } catch (error) {
//                 setError('Error fetching data');
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleAddToCart = async (productId) => {
//         if (user) {
//             try {
//                 await addToCart(user.id, productId, 1); // Example quantity
//                 alert('Product added to cart');
//             } catch (error) {
//                 console.error('Error adding product to cart:', error);
//                 alert('Failed to add product to cart');
//             }
//         } else {
//             alert('You need to log in to add items to the cart');
//         }
//     };

//     if (loading) return <Spinner animation="border" variant="primary" />;
//     if (error) return <Alert variant="danger">{error}</Alert>;

//     return (
//         <div>
//             <header className="navbar">
//                 <div className="logo">Sports Accessories</div>
//                 <nav className="nav-container">
//                     <ul className="nav-links">
//                         <li><Link to="/home">Home</Link></li>
//                         <li><Link to="/profile">Profile</Link></li>
//                         <li><Link to="/orders">Orders</Link></li>
//                         <li><Link to="/cart">Cart</Link></li>
//                         <li><Link to="/logout">Logout</Link></li>
//                     </ul>
//                 </nav>
//             </header>

//             {/* Main Content */}
//             <Container className="mt-4">
//                 <h2>Welcome, {user ? user.name : 'Loading...'}</h2>
//                 <Row>
//                     {products.map((product) => (
//                         <Col sm={12} md={6} lg={4} key={product.id}>
//                             <Card className="mb-4">
//                                 <Card.Img 
//                                     variant="top" 
//                                     src={imageMap[product.id]} 
//                                     alt={product.name} 
//                                 />
//                                 <Card.Body>
//                                     <Card.Title>{product.name}</Card.Title>
//                                     <Card.Text>
//                                         {product.description}
//                                     </Card.Text>
//                                     <Button 
//                                         variant="primary" 
//                                         onClick={() => handleAddToCart(product.id)}
//                                     >
//                                         Add to Cart
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default UserDashboard;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css'; 
import Footer from '../components/Footer'; 

import cricketBat from '../images/Featured/bat.jpg';
import tennisRacket from '../images/Featured/tenrack.jpg';
import runningShoes from '../images/Featured/shoe.jpeg';
import basketball from '../images/Featured/basketball.jpg';
import carrom from '../images/Featured/carrom.jpg';

import cricketCategory from '../images/Categories/cricket.jpg';
import badmintonCategory from '../images/Categories/badminton.jpeg';
import hockeyCategory from '../images/Categories/hockey.jpg';
import boxingCategory from '../images/Categories/boxing.jpeg';
import footballCategory from '../images/Categories/football.jpg';

const UserDashboard = () => {
    const navigate = useNavigate(); 

    const products = [
        {
            id: 1,
            name: "Bat",
            price: "$29.99",
            image: cricketBat,
            link: "/batproducts" 
        },
        {
            id: 2,
            name: "Tennis Racket",
            price: "$89.99",
            image: tennisRacket,
            link: "/tennisproducts" 
        },
        {
            id: 3,
            name: "Shoes",
            price: "$119.99",
            image: runningShoes,
            link: "/shoeproducts" 
        },
        {
            id: 4,
            name: "BasketBalls",
            price: "$49.99",
            image: basketball,
            link: "/basketballproducts" 
        },
        {
            id: 5,
            name: "Carrom",
            price: "$45.99",
            image: carrom,
            link: "/carromproducts" 
        },
    ];

    const categories = [
        { name: 'Cricket', image: cricketCategory, link: '/cricket' },
        { name: 'Badminton', image: badmintonCategory, link: '/badminton' },
        { name: 'Hockey', image: hockeyCategory, link: '/hockey' },
        { name: 'Boxing', image: boxingCategory, link: '/boxing' },
        { name: 'Football', image: footballCategory, link: '/football' },
    ];

    const handleAddToCart = (link) => {
        navigate(link); 
    };

    return (
        <div className="home">
            <header className="navbar">
                 <div className="logo">Sports Accessories</div>
                 <nav className="nav-container">
                   <ul className="nav-links">
                         <li><Link to="/home">Home</Link></li>
                         <li><Link to="/profile">Profile</Link></li>                         
                         <li><Link to="/orders">Orders</Link></li>
                         <li><Link to="/cart">Cart</Link></li>
                         <li><Link to="/logout">Logout</Link></li>                    
                   </ul>
                </nav>
             </header>

           

            <div className="featured-products" id="products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div className="product-item" key={product.id}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                            <button 
                                className="product-button"
                                onClick={() => handleAddToCart(product.link)} 
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <section className="explore-more">
                <h2>Explore More Accessories</h2>
                <div className="category-list">
                    {categories.map((category, index) => (
                        <Link to={category.link} className="category-card" key={index}>
                            <img src={category.image} alt={category.name} className="category-image" />
                            <div className="category-info">
                                <h3 className="category-name">{category.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default UserDashboard;

