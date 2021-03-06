import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import LoginService from '../../../services/user/LoginService';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.loginService = new LoginService();
    }

    login = () => {
        console.time('perf');
        this.loginService
            .login({})
            .then((data) => {
                console.log(data);
                console.timeEnd('perf');
                window.location = '/dashboard';
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="Login">
                <form>
                    <FormGroup controlId="username" className="group">
                        <FormLabel column="sm" className="label">
                            Username
                        </FormLabel>
                        <FormControl autoFocus type="text" />
                    </FormGroup>
                    <FormGroup controlId="password" className="group">
                        <FormLabel column="sm" className="label">
                            Password
                        </FormLabel>
                        <FormControl type="password" />
                    </FormGroup>
                    <div>
                        <Button type="button" onClick={this.login}>
                            Login
                        </Button>
                        <Button type="button">Register</Button>
                    </div>
                </form>
            </div>
        );
    }
}
