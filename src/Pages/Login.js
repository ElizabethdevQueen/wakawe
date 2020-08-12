import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

export default class Login extends Component{
    render() {
        return(
            <Form className="login-form">
                <h1><span className="font-weight-bold">Wakawe.com</span></h1>
                <h2>Welcome</h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Your email address" required/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" required/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Log in</Button>
                <div className="text-content pt-3">
                    or continue with your social account
                </div>
                <FacebookLoginButton className="mt-3 mb-3" />
                <div>
                    <a href="/sign-up">Sign Up</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">Forgot Password</a>
                </div>
            </Form>
        )
    }
}
