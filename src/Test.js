import React from 'react';
import Temp from './Temp';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Header from './NavBar/Header';
import App from './mapBox/App';
import Home from './LoginStyle/Home';
import ExButton from './NavBar/DataArrayMap';
import Login from './LoginStyle/Login';
import Error from './App';
import LoginApp from './LoginStyle/App';



class Test extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <LoginApp /> */}
                    <Header />
                    <Switch />
                        <div>
                            <Route path='/' exact component={Temp} />
                            <Route path='/search-maps' exact component={App} />
                            <Route path='/login' exact component={LoginApp} />
                            <Route component={Error} />
                            {/* <LoginForm /> */}
                        </div>
                    {/* </Switch> */}
                </div>

            </BrowserRouter>
        );
    }
}

export default Test;