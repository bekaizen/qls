import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Button, Message } from "semantic-ui-react";
import Header from "../partials/Header";

import "../../css/App.css";
import { ReactComponent as Logo3 } from "../../logo3.svg";

const Pricing = () => (
    <div>
        <Header />
        <section className="main">
            <div className="banner-action-info animated fadeInDown">
                <div className="inner-banner">
                    <div className="brx-t">
                        <h1>Get time back for less than $2 per day</h1>
                        <h2>Save an average of 42 hours per month with QuickLoanSystems.*</h2>
                        <h4><spam> <b>Buy now</b> </spam> for 50% off Free trial for 30 days</h4>
                    </div>
                    <div className="banner-box">
                        <div>
                            <h2>50% Off</h2>
                            <h2>QuickLoanSystems</h2>
                            <p>For 3 Months</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing-table">
                
            </div>
        </section>
        <footer className="animated fadeInUp">
            <div className="footer-bottom cx">
                <div className="copyright">
                    <Logo3 />
                    <div className="copy">
                        <span>© 2019, Quick Loan Systems.</span>
                        <p>QLS, Quick Loan Systems is a registered trademark of Guplab, Inc.</p>
                    </div>
                </div>
                <div className="sbx">
                    <p><b>Get QLS email updates.</b></p>
                    <Form className="subscribe">
                        <Form.Field className="sub-field">
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"/>
                        </Form.Field>
                        <Button className="btn-primary btn-primaryh">
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </Button>
                    </Form>
                </div>
            </div>
        </footer>
    </div>
)

export default Pricing;