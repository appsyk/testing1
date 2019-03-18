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
import Register from './Reserve/Register';
import Spinner from './Loader/Spinner';
import ResTest from './Reserve/ReserveT';



class Test extends React.Component {
    render() {
        console.log("jk")
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
                            <Route path='/reserve-ur-place' exact component={ResTest} />
                            {/* <Route component={Spinner} /> */}
                            {/* <Register /> */}
                        </div>
                    {/* </Switch> */}
                </div>

            </BrowserRouter>
        );
    }
}

export default Test;