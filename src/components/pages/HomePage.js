import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/App.css";

const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
        <Link to="/pricing">Pricing</Link>
    </div>
)

export default HomePage