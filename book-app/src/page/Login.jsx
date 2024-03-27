import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Login() {
    return (
        <>
            <Header />
            {/*/header*/}
            <section id="form">
                {/*form*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-1">
                            <div className="login-form">
                                {/*login form*/}
                                <h2>Login to your account</h2>
                                <form action="#">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email Address" />
                                    <span>
                                        <input type="checkbox" className="checkbox" />
                                        Keep me signed in
                                    </span>
                                    <button type="submit" className="btn btn-default">
                                        Login
                                    </button>
                                </form>
                            </div>
                            {/*/login form*/}
                        </div>
                        <div className="col-sm-1">
                            <h2 className="or">OR</h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="signup-form">
                                {/*sign up form*/}
                                <h2>New User Signup!</h2>
                                <form action="#">
                                    <input type="text" placeholder="UserName" />
                                    <input type="email" placeholder="Email Address" />
                                    <input type="password" placeholder="Password" />
                                    <input type="text" placeholder="Full Name" />
                                    <input type="text" placeholder="Phone Number" />
                                    <input type="text" placeholder="Address" />
                                    <button type="submit" className="btn btn-default">
                                        Signup
                                    </button>
                                </form>
                            </div>
                            {/*/sign up form*/}
                        </div>
                    </div>
                </div>
            </section>
            {/*/form*/}
            <Footer />
            {/*/Footer*/}
        </>

    )
}

export default Login;