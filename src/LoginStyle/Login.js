import React from 'react';
import firebase from '../Reserve/Firebase';
import Header from '../NavBar/Header';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
    showForm: false,
    closeForm: true
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    console.log(e.name);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    })
      .catch((err) => {
        // this.setState = ({ errorMessage: err.message });
        alert(err.message);
      });
  }

  signup = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch(error => {
        alert(error.message);
      }
      )
  }

  // state = { showForm: false, closeForm: true };

  onLoginClick = () => {
    this.setState({ showForm: true });
  }

  onCloseClick = () => {
    this.setState({ closeForm: false });
  }

  renderLoginForm() {

    // if (this.state.showForm === false ) {
    //     return <div>sanju</div>
    // } else
      // console.log(this.state.showForm);
      if (this.state.closeForm === true){
      console.log('check', this.state.showForm);
      console.log(this.state.closeForm);
      return (
        <div>
          <div className="">
            {/* id="id01" */}
            <form className="modal-content animate loginbox">
              <div className="imgcontainer">
                <a href="/"><span className="close" title="Close Modal">&times;</span></a>
                <img src="https://www.parking-mobility.org/wp-content/uploads/2018/01/GettyImages-5145168551.jpg" alt="Avatar" className="avatar" />
              </div>
              <div className="containerform">
                <label htmlFor="email"><b>Email</b></label>
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  // id="exampleInputEmail1"
                  // aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  //id="email"
                  required
                />
                <br />

                <label htmlFor="password"><b>Password</b></label>
                
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  // id="exampleInputPassword1"
                  placeholder="Enter Password"
                  //id="password"
                  //onInput="return passwordValidation(this.value)"
                  required
                />
                <button type="submit" onClick={this.login} className="button55" >Login</button>
                <button style={{ backgroundColor: 'red', marginLeft: '20px' }} className="button55" onClick={this.signup} >Signup</button>                
                {/* <label>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label> */}
              </div>

              <div className="containerform" style={{ backgroundColor: '#f1f1f1' }}>
                <a href="/"><button className="button55 cancelbtn" onClick={this.onCloseClick} >Cancel</button></a>

              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  


  render() {

    return (
      <div className="backimage">


        {/* <Header log={this.sanju()} /> */}
        {/* <div className="signupSection">
                  <div className="info">
                    <h2 style={{ fontSize: "25px" }}>Mission to Safe Park</h2>
         <img src="https://www.iconspng.com/uploads/green-parking/green-parking.png" alt="parking_icon" width="200px" height="200px" />
                    <p>The Parking Is Here</p>
                  </div>
                  <form className="signupForm" name="signupform">
                    {this.loginForm()}
                    {this.sanju()}
                  </form>
                </div>

                <script src="js/index.js"></script> */}

        {this.renderLoginForm()}

      </div>

    );
  }
}
export default Login;