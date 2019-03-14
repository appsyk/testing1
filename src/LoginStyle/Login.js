//import './style.css';
import './W3temp.css';
import React from 'react';
//import { Link } from 'react-router-dom';
import fire from './Firebase';
import Header from '../NavBar/Header';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    console.log(e.name);
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    })
      .catch((err) => {
        // this.setState = ({ errorMessage: err.message });
        alert(err.message);
      });
  }

  signup = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch(error => {
        alert(error.message);
      }
      )
  }


  loginForm() {
    return (
      <div>
        <h2 style={{ fontSize: "25px" }}>Login</h2>
        <ul className="noBullet">
          <li>
            {/* <label for="email"></label> */}
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="inputFields"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              //id="email"
              required
            />
          </li>
          <li>
            {/* <label for="password"></label> */}
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="inputFields"
              id="exampleInputPassword1"
              placeholder="Password"
              //id="password"
              //onInput="return passwordValidation(this.value)"
              required
            />
          </li><br />

          <li id="center-btn">
            <button className="button" type="submit" onClick={this.login}>Login</button>
            <button className="button" onClick={this.signup} style={{ marginLeft: '25px' }}>Signup</button>

          </li>
        </ul>
      </div>
    );
  };

  signupForm(){
    return (
      <div>

        <h2 style={{ fontSize: "25px" }}>Sign Up</h2>
        <ul className="noBullet">
          <li>
            {/* <label for="email"></label> */}
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="inputFields"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              //id="email"
              required
            />
          </li>
          <li>
            {/* <label for="password"></label> */}
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="inputFields"
              id="exampleInputPassword1"
              placeholder="Password"
              //id="password"
              //onInput="return passwordValidation(this.value)"
              required
            />
          </li><br />

          <li id="center-btn">
            <button className="button" onClick={this.signup} style={{ marginLeft: '25px' }}>Signup</button>
          </li>
        </ul>
      </div>
    );
  };

  sanju(){
    return(
      <div style={{color:'black'}}>
        "hey bhagwaan rasta dikha de!"
      </div>
    );
  };

  render () {

    return (
      <div>

       
        {/* <Header log={this.sanju()} /> */}
                <div className="signupSection">
                  <div className="info">
                    <h2 style={{ fontSize: "25px" }}>Mission to Safe Park</h2>
                    {/* <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i> */}
         <img src="https://www.iconspng.com/uploads/green-parking/green-parking.png" alt="parking_icon" width="200px" height="200px" />
                    <p>The Parking Is Here</p>
                  </div>
                  <form className="signupForm" name="signupform">
                    {this.loginForm()}
                    {this.sanju()}
                  </form>
                </div>

                <script src="js/index.js"></script>



      </div>

    );
  }
}
export default Login;