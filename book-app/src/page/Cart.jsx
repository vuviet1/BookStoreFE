import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import axios from 'axios';

function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleRemoveFromCart = (itemId) => {
        let updatedCart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload(); // Reload the page to reflect changes
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        let updatedCart;
        if (newQuantity < 1) {
            updatedCart = cart.filter(item => item.id !== itemId);
        } else {
            updatedCart = cart.map(item => {
                if (item.id === itemId) {
                    item.quantity = newQuantity;
                }
                return item;
            });
        }
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };


    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };


    return (
        <>
            <Header />
            {/*/header*/}
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li className="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Item</td>
                                    <td className="description" />
                                    <td className="price">Price</td>
                                    <td className="quantity">Quantity</td>
                                    <td className="total">Total</td>
                                    <td />
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr>
                                        <td className="cart_product" style={{ marginRight: "10px" }}>
                                            <a href="">
                                                <img src={'/images/shop/' + item.imageUrl} alt="" style={{ width: "100px" }} />
                                            </a>
                                        </td>
                                        <td className="cart_description">
                                            <h4>
                                                <a href="">{item.name}</a>
                                            </h4>

                                        </td>
                                        <td className="cart_price">
                                            <p>{item.price.toLocaleString('vi-VN')} VND</p>
                                        </td>
                                        <td className="cart_quantity">
                                            <div className="cart_quantity_button">
                                                <a className="cart_quantity_down" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                                    {" "}
                                                    -{" "}
                                                </a>
                                                <input
                                                    className="cart_quantity_input"
                                                    type="text"
                                                    name="quantity"
                                                    value={item.quantity}
                                                    autoComplete="off"
                                                    size={2}
                                                />
                                                <a className="cart_quantity_up" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                    {" "}
                                                    +{" "}
                                                </a>
                                            </div>
                                        </td>
                                        <td className="cart_total">
                                            <p className="cart_total_price">{formatCurrency(item.price * item.quantity)}</p>
                                        </td>
                                        <td className="cart_delete">
                                            <a className="cart_quantity_delete" onClick={() => handleRemoveFromCart(item.id)}>
                                                <i className="fa fa-times" />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>{" "}
            {/*/#cart_items*/}
            <section id="do_action">
                <div className="container">
                    <div className="heading">
                        <h3>What would you like to do next?</h3>
                        <p>
                            Choose if you have a discount code or reward points you want to use or
                            would like to estimate your delivery cost.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="total_area">
                                <ul>
                                    {/* <li>
                                        <label>Phương thức thanh toán:</label>
                                        <select>
                                            <option>Select</option>
                                            <option>Dhaka</option>
                                            <option>London</option>
                                            <option>Dillih</option>
                                            <option>Lahore</option>
                                            <option>Alaska</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>
                                    </li> */}
                                    <li>
                                        Total <span>{formatCurrency(getTotalPrice())}</span>
                                    </li>
                                </ul>
                                {/* <a className="btn btn-default update" href="" style={{ display: "none" }}>
                                    Update
                                </a> */}
                                <Link to={"/Checkout"} className="btn btn-default update" href="">
                                    Check Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/#do_action*/}
            <Footer />
            {/*/Footer*/}
        </>

    )
}

export default Cart;