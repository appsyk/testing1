import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import Spinner from '../../Loader/Spinner';
import SeatBox from '../SeatHtml';

class CreateArihantRabale extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('arihants');
    this.state = {
      name: '',
      vehicle: '',
      email: '',
      phoneNumber: '',
      arrivingTime: '',
      leavingTime: '',
      user: null,
      count:0
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, vehicle,
      email, phoneNumber, arrivingTime, leavingTime } = this.state;

    this.ref.add({
      name,
        vehicle,
        email,
        phoneNumber,
        arrivingTime,
        leavingTime

    }).then((docRef) => {
      this.setState({
        name: '',
      vehicle: '',
      email: '',
      phoneNumber: '',
      arrivingTime: '',
      leavingTime: '',
      });
      this.props.history.push("/reserve-place@ARIHANT_RABALE")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  componentDidMount() {
    this.authListener();
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

  }

  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
        
        if (user) {
            this.setState({ user });
            localStorage.setItem('user', user.uid);
        } else {
            this.setState({ user: null });
            localStorage.removeItem('user');
            console.log("email12345",this.state.user.email);

        }
    });
  }

  remainPlace() {
    const rem = (10 - (this.state.count));
    return rem;
  }

  onCollectionUpdate = (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.setState({ count:(this.state.count + 1 )})
    });
    this.setState({
   });
  }


  render() {
    console.log(321,this.state.count);
    if(!this.state.user){
      //alert("you are not logged in");
       return(
        <div style={{ textAlign: "center" }}>
          <br /><br /><br /><br /><br />
          <h1>You are currently not logged in !</h1>
          <h3>You have to <a href="/login"><b>log in</b></a></h3>
          <h4>to reserve a parking..!</h4>
          <Spinner />
        </div>
       );
     }
     
    const { name, vehicle,
       email, phoneNumber, arrivingTime, leavingTime } = this.state;
    return (
      <div className="container">
      <div>
        <section id="contact">
          <div className="container">
            <div className="row">
            <h4 ><Link to="/reserve-place@ARIHANT_RABALE"  className="btn custom-btn btn-info"><span className="glyphicon glyphicon-list fa-2x" style={{ marginRight: '4%' }} ></span>WATCH THE LIST</Link></h4>

              <div className="colmd-12">
                <div className="contact_area text-center">
                  <h3 style={{ marginTop: '-4%' ,marginLeft:'22%', marginRight:'20%' }} >Arihant Parking Systems, rabale</h3>
                  <h2 style={{ marginTop: '-1%', marginLeft:'13%', marginRight:'13%' }}>R-399, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701</h2>
                </div>
              </div>
            </div>
            <SeatBox />
            <div className="row">
              <div className="col-md-6">
                <div className="office">
                </div>
              </div>
              <div className="col-md-6">
                <div className="msg">
                  <div className="msg_title">
                  <h5><b>' {this.remainPlace()} ' </b>  Parkings Available</h5>
                  </div>
                  <div className="form_area">
                    {/* <!-- CONTACT FORM --> */}
                    <div className="contact-form wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s">
                      <div id="message"></div>
                      <form onSubmit={this.onSubmit} className="form-horizontal contact-1" role="form" name="contactform" id="contactform">
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={this.onChange} value={name} name="name" id="name" placeholder="FULL NAME" />
                          </div>
                          {/* <div className="col-sm-6">
                          <input type="text" className="form-control" onChange={this.onChange} value={lastName} name="lastName" id="name" placeholder="LAST NAME" />
                        </div> */}

                        </div>
                        <div className="form-group">
                          <div className="col-sm-5">
                            <input type="text" className="form-control" onChange={this.onChange} value={email} name="email" id="email" placeholder="EMAIL" list="Emails" autocomplete="off" />
                            <datalist id="Emails">
                              <option value={this.state.user.email}></option>
                            </datalist>
                          </div>
                          <div className="col-sm-5">
                            <input type="number" className="form-control" value={phoneNumber} onChange={this.onChange} name="phoneNumber" id="name" placeholder="PHONE NUMBER" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="subject" className="form-control" id="subject" onChange={this.onChange} value={vehicle} name="vehicle" placeholder="Enter vehicle info just like COMPANY-MODEL-NUMBER *" />
                            <div className="form-group">
                          <div className="col-sm-6">
                            <input type="datetime-local" className="form-control" onChange={this.onChange} value={arrivingTime} name="arrivingTime" id="email" placeholder="ARRIVING TIME" />
                          </div>
                          <div className="col-sm-6">
                            <input type="datetime-local" className="form-control" value={leavingTime} onChange={this.onChange} name="leavingTime" id="name" placeholder="LEAVING TIME" />
                          </div>
                        </div>
                            {/* <div className="text_area">
                              <textArea name="contact-message" id="msg" className="form-control" cols="30" rows="8" onChange={this.onChange} name="descibe"
                                placeholder="DESCRIBE YOUR SPACE  (types of spce: Driveway/ Garage/ Car park), width of Space, (Features: Electric charging/ CCTV ?)" >{describe}</textArea>
                              {/* <textarea className="form-control" name="vehicleNumber" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea> 
                            </div> */}
                            <button type="submit" className="btn custom-btn col-sm-12" data-loading-text="Loading...">Reserve your Parking</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--End of col-md-6--> */}
            </div>
            {/* <!--End of row--> */}
          </div>
          {/* <!--End of container--> */}
        </section>

      </div>

    </div>
    );
  }
}

export default CreateArihantRabale;
