import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";
import { ReactComponent as Logo2 } from "../../logo2.svg";

import { Form, Button, Message } from "semantic-ui-react";

const linkStyle = {
    borderBottom: '5px solid rgb(19, 170, 82)'
};

const Header = () => (
    <div>
        <div className="offerTab animated fadeInDown"></div>
        <header className="header animated fadeInDown">
            <div className="started-menu">
                <Link to="/">
                    <Logo />
                </Link>
                <ul className="primary-menu">
                    <li> <Link to="/pricing" className="link">Plans & Pricing</Link> </li>
                    <li> <Link to="/how-it-works" className="link">How it works</Link> </li>
                    <li> <Link to="/community" className="link">Community</Link> </li>
                    <li> <Link to="/support" className="link">Support</Link> </li>
                </ul>
            </div>
            <div className="user-action">
                <Link to="/contact" className="primary">Contact</Link>
                <Link to="/login" className="signin">Sign in <i className="far fa-arrow-alt-circle-right"></i></Link>
                <Form>
                    <Button className="btn-primary">Try Free</Button>
                </Form>
            </div>
            {/* <Link to="/login">Login</Link> */}
        </header>
    </div>
)


export default Header;