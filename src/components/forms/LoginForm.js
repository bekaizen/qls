import React from 'react';
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Validator from "validator"; 
import InlineError from "../messages/InlineError";
import { ReactComponent as Logo } from "../../logo.svg";

import "../../css/App.css";

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value } 
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
        }
    }

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";

        if (!data.password) errors.password = "Can't be empty";
        return errors;
    }
    
    render() {
        const { data, errors, loading } = this.state;

        return (
            <div className="login">
                <div className="logotype">
                    <Link to="/">
                        <Logo className="logt" />
                    </Link>
                </div>
                <div className="fm-env">
                    <div className="fm-env-bx bx1">
                        <Form onSubmit={this.onSubmit} loading={loading}>
                            
                            { errors.global && (
                                <Message negative>
                                    <Message.Header>Something went wrong</Message.Header>
                                    <p>{ errors.global }</p>
                                </Message>
                            )}
                            <h4>
                                <i className="fas fa-lock"></i>
                                Login
                            </h4>
                            <Form.Field error={!!errors.email}>
                                {/* <label htmlFor="email">email</label> */}
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    value={data.email}
                                    onChange={this.onChange}/>
                                    {errors.email && <InlineError text={errors.email}/>}
                            </Form.Field>
                            <span>Use the email you used for register</span>
                            <Form.Field error={!!errors.password}>
                                {/* <label htmlFor="password">password</label> */}
                                <input 
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="example@example.com"
                                    value={data.password}
                                    onChange={this.onChange}/>
                                    {errors.password && <InlineError text={errors.password}/>}
                            </Form.Field>
                            <Link to="/forgot">Forgot password?</Link>
                            <Button primary>Login</Button>
                        </Form>
                    </div>
                    <div className="fm-env-bx">
                        
                    </div>
                </div>
                <div className="log-btn">
                    <span>
                        <Link to="/register">Register</Link> for a new account
                    </span>
                </div>
            </div>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;