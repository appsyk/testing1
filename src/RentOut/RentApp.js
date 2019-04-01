import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import firebase from '../Reserve/Firebase';
import CurrentLocation from './RentMap';
import Spinner from '../Loader/Spinner';


export class MapContainer extends Component {
  // state = {
  //   showingInfoWindow: false,
  //   activeMarker: {},
  //   selectedPlace: {},
  //   user: null
  // };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  constructor() {
    super();
    this.ref = firebase.firestore().collection('rents');
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      lat: '',
      noOfSpaces: '',
      lng: '',
      address: '',
      describe: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      user: null
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, lat,
      noOfSpaces, lng, address, describe } = this.state;

    this.ref.add({
      firstName,
      lastName,
      email,
      lat,
      noOfSpaces,
      lng,
      address,
      describe

    }).then((docRef) => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        lat: '',
        noOfSpaces: '',
        lng: '',
        address: '',
        describe: ''
      });
      this.props.history.push("/")
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  // state = { user: null };

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


  render() {
    if (!this.state.user) {
      //alert("you are not logged in");
      return (
        <div style={{ textAlign: "center" }}>
          <br /><br /><br /><br /><br />
          <h1>You are currently not logged in !</h1>
          <h3>You have to <a href="/login"><b>log in</b></a></h3>
          <h4>for further process</h4>
          <Spinner />
        </div>
      );
    }
    console.log(102, this.state.selectedPlace.map);
    const { firstName, lastName, email, lat,
      noOfSpaces, lng, address, describe } = this.state;
    return (
      <div>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="colmd-12">
                <div className="contact_area text-center">
                  <h3>Rent out your parking places</h3>
                  {/* <p>You can Rentout your own places for parking.</p> */}
                </div>
              </div>
            </div>
            {/* <!--End of row--> */}
            <div className="row"  style={{ marginTop: '-5%' }}>
              <div className="col-md-6">
                <div className="office">
                  <div className="title">
                    <h5>click on <b style={{ color: 'red' }}>red</b> marker</h5><h4>To grab Lattitude and Longitude of your location</h4>

                  </div>
                  <div className="office_location">
                    <div className="address">
                      <i className="fa fa-map-marker">
                        {this.state.selectedPlace.map ? (
                          <a href={this.state.selectedPlace.map.rmiUrl} style={{ marginLeft: '20px' }}>Your current location</a>)
                          : (console.log("Click on marker to Rent out your place..!"))}
                      </i>
                    </div>
                    <div className="phone">
                      <i className="fa fa-phone"><span>+ 91 9595949873</span></i>
                    </div>
                    <div className="email">
                      <i className="fa fa-envelope"><span>imatom19@gmail.com</span></i>
                    </div>
                    <div id="map">
                      <div>
                        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                          <Marker onClick={this.onMarkerClick} name={'Now fill the form'} />
                          <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                            style={{ backgroundColor: '#98dbc6' }}
                          >
                            <div>
                              <h3 style={{ marginTop: '20%', color: 'black' }} ><b>{this.state.selectedPlace.name}</b></h3>
                            </div>
                          </InfoWindow>
                        </CurrentLocation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="msg">
                  <div className="msg_title">
                    <h5>Drop A Message</h5>
                  </div>
                  <div className="form_area">
                    {/* <!-- CONTACT FORM --> */}
                    <div className="contact-form wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s">
                      <div id="message"></div>
                      <form onSubmit={this.onSubmit} className="form-horizontal contact-1" role="form" name="contactform" id="contactform">
                        <div className="form-group">
                          <div className="col-sm-6">
                            <input type="text" className="form-control" onChange={this.onChange} value={firstName} name="firstName" id="name" placeholder="FIRST NAME" />
                          </div>
                          <div className="col-sm-6">
                            <input type="text" className="form-control" onChange={this.onChange} value={lastName} name="lastName" id="name" placeholder="LAST NAME" />
                          </div>
                          <div className="col-sm-6">
                            <input type="text" className="form-control" onChange={this.onChange} value={email} name="email" id="email" placeholder="EMAIL" list="Emails" autocomplete="off" />
                            <datalist id="Emails">
                              <option value={this.state.user.email}></option>
                            </datalist>
                          </div>
                        </div>
                        {/* <div class="row">
                            <div class=" btn-group-justified" data-toggle="buttons">
                              <label class="btn btn-success active">
                                <input type="radio" name="options" id="name" autocomplete="off" defaultChecked /> Radio 1 (preselected)
                              </label>
                              <label class="btn btn-info">
                                <input type="radio" name="options" id="name" autocomplete="off" /> Radio 2
                              </label>
                              <label class="btn btn-warning">
                                <input type="radio" name="options" id="name" autocomplete="off" /> Radio 3
                              </label>
                            </div>          
                          </div> */}
                        <div className="form-group">
                          <div className="col-sm-6">
                            {this.state.selectedPlace.mapCenter ? (<form><input type="text" className="form-control" value={lat} onChange={this.onChange} name="lat" id="lat" placeholder="LATTITUDE" list="Lat" autocomplete="off" />
                              <datalist id="Lat">
                                <option value={this.state.selectedPlace.mapCenter.lat}></option>
                              </datalist></form>)
                              : (<input type="text" className="form-control" value={lat} name="lat" id="name" placeholder="LATTITUDE" />)}

                          </div>

                          <div className="col-sm-6">
                            <input type="number" className="form-control" value={noOfSpaces} onChange={this.onChange} name="noOfSpaces" id="name" placeholder="NO OF SPACES" />
                          </div>


                          <div className="col-sm-6">
                            {this.state.selectedPlace.mapCenter ? (<div><input type="text" className="form-control" value={lng} onChange={this.onChange} name="lng" id="lng" placeholder="LONGITUDE" list="Lng" autocomplete="off" />
                              <datalist id="Lng">
                                <option value={this.state.selectedPlace.mapCenter.lng}></option>
                              </datalist></div>)
                              : (<input type="text" className="form-control" value={lng} name="lng" id="name" placeholder="LONGITUDE" />)}
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-12">
                            <input type="subject" className="form-control" id="subject" onChange={this.onChange} value={address} name="address" placeholder="ADDRESS *" />
                            <div className="text_area">
                              <textArea name="contact-message" id="msg" className="form-control" cols="30" rows="8" onChange={this.onChange} name="descibe"
                                placeholder="DESCRIBE YOUR SPACE  (types of spce: Driveway/ Garage/ Car park), width of Space, (Features: Electric charging/ CCTV ?)" >{describe}</textArea>
                              {/* <textarea className="form-control" name="vehicleNumber" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea> */}
                            </div>
                            <button type="submit" className="btn custom-btn" data-loading-text="Loading...">Submit your form</button>
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
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE'
})(MapContainer);