import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.css';
import LoginService from '../../../services/user/LoginService'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.loginService = new LoginService();
    }

    login() {
        console.time('perf');
        this.loginService.login({}).then((data) => {
            console.log(data);
            console.timeEnd('perf');
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="Login">
                <form>
                    <FormGroup controlId="username" bsSize="large" className="group">
                        <FormLabel column="sm" className="label">Username</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large" className="group">
                        <FormLabel column="sm" className="label">Password</FormLabel>
                        <FormControl
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" type="button" onClick={this.login.bind(this)}>
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}