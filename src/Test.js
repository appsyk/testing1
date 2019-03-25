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
import Create from './reserveForm/Create';
import Edit from './reserveForm/Edit';
import Show from './reserveForm/Show';
import ResForm from './reserveForm/App';
import RentForm from './RentOut/RentForm';
import RentApp from './RentOut/RentApp';



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
                        <Route path='/sanju' exact component={ResTest} />
                        <Route exact path='/app' component={ResForm} />
                        <Route path='/edit/:id' component={Edit} />
                        <Route path='/reserve-ur-place' exact component={Create} />
                        <Route path='/show/:id' component={Show} />
                        <Route path='/rent-out-ur-places' component={RentApp} />
                        {/* <Route component={Spinner} /> */}
                        {/* <Register /> */} 
                    </div>
                    {/* </Switch> <RentForm /> */}
                </div>
               
            </BrowserRouter>
        );
    }
}

export default Test;