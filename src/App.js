import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Pricing from "./components/pages/Pricing";
import Howitworks from './components/pages/Howitworks';

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/pricing" exact component={Pricing} />
    <Route path="/how-it-works" exact component={Howitworks} />
  </div>
)

export default App;
