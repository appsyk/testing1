import '../mapBox/MapBox.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import fire from '../LoginStyle/Firebase';
//import Home from '../LoginStyle/Home';
import ExButton from './DataArrayMap';
import Home from '../LoginStyle/Home';


//import Login from '../LoginStyle/Login';

class Header extends React.Component {
    state = { showButton: "sanuju", time: new Date().toLocaleString() };

    // state={ time: new Date().toLocaleString()};

    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
      this.emailRe = setInterval(
        (props) => this.renderButton(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
      clearInterval(this.emailRe);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }

    

   
    toggleHandle = (test) => {
        const el = findDOMNode(this.refs.test)
        $(el).slideToggle();
    }

    logout = () => {
        fire.auth().signOut();
    }

    // exstingUser(props){
    //     if(this.props.emailwa === null){
    //         return<div>{this.state.showMenu}</div>
    //     }else
    //         this.setState({ showMenu : (this.props.emailwa)})
    //         return<div>{this.state.showMenu}</div>
    // }

    renderButton(props) {
        // console.log(1212,this.props.userin.email);
        if(this.props.userin === undefined){
        //    this.setState({ showButton : (this.props.userin.email)});
            // console.log(444,this.props.userin.email);
            return(
                <div>
                    {this.state.showButton}
                </div>
            )
           // {this.props.userin.email}
        }
        else
        return (
            <div>
                    Sign in Please...
               
            </div>
        );

    }


    render(props) {
        // console.log("sanjubhai",this.props.userin);
    // console.log(111,this.props.emailwa);
    //  if(!this.props.userin){
    //      return<div>Loading...</div>
    //  }else
        console.log(this.props.embutt);
    
        return (
            <div>
                <section id="header">
                    <div className="header-area">
                    

                        {/* <!--End of top header--> */}
                        <div className="header_menu text-center navBinkami" style={{ marginTop: '-50px' }} data-spy="affix" data-offset-top="50" id="nav">
                            <nav style={{ backgroundColor: 'white' }} className="navbar navbar-default zero_mp navbar-fixed-top navBaresh ">
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
                                        <a className="navbar-brand" href="#"><img className="logoSize" src="https://www.iconspng.com/uploads/green-parking/green-parking.png" alt="logo" height="65px" width="70px"></img></a>
                                        <li><h2 style={{ color: '#0676B7', marginBottom: '10px', fontSize: '25px' }}>𝐒𝖒𝖆𝖗𝖙 𝐏𝖆𝖗𝖐</h2></li>
                                        {/* 𝕾𝖒𝖆𝖗𝖙 𝕻𝖆𝖗𝖐 */}
                                    </div>

                                    <div className="collapse navbar-collapse zero_mp" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav navbar-right main_menu">
                                            <li className="active"><NavLink to='/'>Home <span className="sr-only">(current)</span></NavLink></li>
                                            {/* <li><a href="#welcome">about</a></li>
                                            <li><a href="#map">Search for places</a></li> */}

                                            {/* <li><a href="#counter">achivment</a></li>
                                            <li><a href="#event">event</a></li>
                                            <li><a href="#testimonial">testimonialNO</a></li>
                                            <li><a href="#blog">blog</a></li> */}
                                            {/* <li><a href="#contact">contact us</a></li> */}
                                            {/* <li><Link to="/login">Login</Link></li> */}

                                            <li>
                                                <div className="dropdown">
                                                    <button className="dropbtn button dropdown-toggle">{this.props.embutt ? (
                                                        <div>
                                                            {this.props.embutt}
                                                            <div className="dropdown-content">
                                                                <a href="#" onClick={this.logout}>Logout</a>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            Sign In
                                                            <div className="dropdown-content">
                                                                <NavLink to='/login'>Login</NavLink>
                                                            </div>
                                                        </div>
                                                    )}
                                                    </button>
                                                    
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