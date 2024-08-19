import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiRequest, SERVER_URL } from "../libs/request";

function ViewCart() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [address, setAddress] = useState({
        city: "",
        state: "Delhi",
        zip: "12324",
        country: "India",
    });
    const [payment, setPayment] = useState({
        cardno: "",
        nameoncard: "",
        cvv: "",
        amount: (state.cart || []).reduce((a, b) => a + (b.price * b.quantity), 0),
    });

    // Log cart state for debugging
    console.log("Cart Items:", state.cart);

    const deleteItem = (item) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            dispatch({ type: 'RemoveItem', payload: item });
            let amount = (state.cart || []).reduce((a, b) => a + (b.quantity * b.price), 0);
            setPayment({ ...payment, amount });
        }
    };

    const handleAddressInput = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handlePaymentInput = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        let amount = (state.cart || []).reduce((a, b) => a + (b.price * b.quantity), 0);
        setPayment({ ...payment, amount });
    }, [state.cart]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            cart: state.cart.map(item => ({
                product_id: item.id,
                quantity: item.quantity,
                price: item.price,
            })),
            payment,
            address,
            user_id: sessionStorage.getItem('id'),
        };

        apiRequest.post('orders', data)
            .then(resp => {
                dispatch({ type: 'Clear' });
                navigate('/myorders');
            })
            .catch(error => {
                console.error("Error placing order:", error);
            });
    };

    return (
        <div className="container-fluid text-white">
            {state.cart && state.cart.length > 0 ? (
                <div className="row">
                    <div className="col-sm-7">
                        <h4 className="p-2">Cart View</h4>
                        <table className="table table-bordered table-light table-striped">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.cart.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <img className="mr-2 float-left" src={item.image} width="100" alt={item.name} />
                                            {item.name}
                                        </td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>{item.quantity}</td>
                                        <td>${(item.quantity * item.price).toFixed(2)}</td>
                                        <td><button onClick={() => deleteItem(item)} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="4">Total Amount</th>
                                    <th>${(state.cart || []).reduce((a, b) => a + (b.quantity * b.price), 0).toFixed(2)}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="col-sm-4 bg-white text-dark py-2">
                        <form onSubmit={handleSubmit}>
                            <h4>Address</h4>
                            <input type="text" name="city" value={address.city} onChange={handleAddressInput} placeholder="City" />
                            <input type="text" name="state" value={address.state} onChange={handleAddressInput} placeholder="State" />
                            <input type="text" name="zip" value={address.zip} onChange={handleAddressInput} placeholder="Zip Code" />
                            <input type="text" name="country" value={address.country} onChange={handleAddressInput} placeholder="Country" />

                            <h4>Payment Details</h4>
                            <input type="text" name="cardno" value={payment.cardno} onChange={handlePaymentInput} placeholder="Card Number" />
                            <input type="text" name="nameoncard" value={payment.nameoncard} onChange={handlePaymentInput} placeholder="Name on Card" />
                            <input type="text" name="cvv" value={payment.cvv} onChange={handlePaymentInput} placeholder="CVV" />
                            <input type="hidden" name="amount" value={payment.amount} />

                            <button type="submit" className="btn btn-success">Place Order</button>
                        </form>
                    </div>
                </div>
            ) : (
                <h4>Cart is Empty</h4>
            )}
        </div>
    );
}

export default ViewCart;
