import '../mapBox/MapBox.css';
import './buttonStyle.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import firebase from '../Reserve/Firebase';
//import Home from '../LoginStyle/Home';
import ExButton from './DataArrayMap';
import Home from '../LoginStyle/Home';
import Register from '../Reserve/Register';


//import Login from '../LoginStyle/Login';

class Header extends React.Component {
    // state = { time: new Date().toLocaleString() };

    // state={ time: new Date().toLocaleString()};

    // componentDidMount() {
    //   this.intervalID = setInterval(
    //     () => this.tick(),
    //     1000
    //   );
    //   this.emailRe = setInterval(
    //     (props) => this.renderButton(),
    //     1000
    //   );
    // }

    // componentWillUnmount() {
    //   clearInterval(this.intervalID);
    //   clearInterval(this.emailRe);
    // }
    // tick() {
    //   this.setState({
    //     time: new Date().toLocaleString()
    //   });
    // }

    

   
    // toggleHandle = (test) => {
    //     const el = findDOMNode(this.refs.test)
    //     $(el).slideToggle();
    // }
    state = { user: null };

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }


    logout = () => {
        firebase.auth().signOut();
    }
   

    render(props) {

            // alert("Your Already Logged In...Now press the OKAY button and you'll navigate to Maps");
    
        return (
            <div>
                <section id="header">
                    <div className="header-area" >
                    

                        {/* <!--End of top header--> */}
                        <div className="header_menu text-center navBinkami" style={{ marginTop: '-50px' }} data-spy="affix" data-offset-top="50" id="nav">
                            <nav style={{ backgroundColor: 'white', marginTop: '-0.5%' }} className="navbar navbar-default zero_mp navbar-fixed-top navBaresh ">
                                <div className="container" >
                                {/* <div style={{ backgroundColor: '#grey' }}>{this.state.time}</div> */}
                                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand" href="/"><img className="logoSize" src="https://i2.wp.com/ukcps.com/wp-content/uploads/2017/10/parking-icon.png?w=1080" alt="logo" height="65px" width="70px"></img></a>
                                        <li><h2 style={{ color: '#0676B7', marginBottom: '10px', fontSize: '30px' }}><b style={{ color: '#71CE59' }}>𝕾</b><b style={{ color: '#71CE59' }}>𝖒</b><b style={{ color: '#71CE59' }}>𝖆𝖗𝖙</b><b></b> 𝕻𝖆𝖗𝖐</h2></li>
                                        {/* 𝕾𝖒𝖆𝖗𝖙 𝕻𝖆𝖗𝖐 */}
                                        {/* https://www.iconspng.com/uploads/green-parking/green-parking.png */}
                                    </div>

                                    <div className="collapse navbar-collapse zero_mp" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav navbar-right main_menu" style={{ fontSize:'5px' }}>
                                            <li className="active"><NavLink to='/'>Home <span className="sr-only">(current)</span></NavLink></li>
                                            <li><a href="#welcome">about</a></li>
                                            <li><a href="/search-maps">Search for places</a></li>

                                            <li><a href="/rent-out-ur-places">Rent out your space</a></li>
                                            {/* <li><a href="#event">event</a></li>
                                            <li><a href="#testimonial">testimonialNO</a></li>
                                            <li><a href="#blog">blog</a></li> */}
                                            {/* <li><a href="#contact">contact us</a></li> */}
                                            {/* <li><Link to="/login">Login</Link></li> */}

                                            <li>
                                                <div className="dropdown">
                                                    
                                                        {this.state.user ? 
                                                            (<button className="dropbtn btn btn-info btn-lg dropdown-toggle"><div>{this.state.user.email}
                                                                <div className="dropdown-content">
                                                                    <a href="#" onClick={this.logout}>Logout</a>
                                                                </div>
                                                            </div></button>):(<button className="btn btn-outline-primary custom-btn btn-lg"><div ><NavLink to='/login' style={{ color:'white' }}>Sign In
                                                                {/* <div className="dropdown-content"> 
                                                                </div> */}
                                                                </NavLink>
                                                                </div></button> )}
                                                    
                                                        {/* <div onClick={this.onLoginClick}>Login</div> */}
                                                        
                                                   
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}


export default Header;