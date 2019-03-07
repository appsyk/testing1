import React, { Component } from 'react';
import fire from './Firebase';
import Home from './Home';
import Login from './Login';

class LoginApp extends Component {

    state = { user: null };

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }
    render() {
        return (
            <div>{this.state.user ? (<Home userin={this.state.user}/>) : (<Login />)}</div>
        );
    }
}
export default LoginApp;