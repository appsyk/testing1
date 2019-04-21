import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import Spinner from '../../Loader/Spinner';
import SeatBox from '../SeatHtml';
import App from '/home/sanju/react/spark/src/mapBox/App';
import Loadman from '../../Loader/Loadman';

class CreateDmce extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('dmces');
    this.state = {
      name: '',
      vehicle: '',
      email: '',
      phoneNumber: '',
      arrivingTime: '',
      leavingTime: '',
      plotId: '',
      user: null,
      count: 0,
      box: null,
      dmces: [],
      isChecked: false

    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value.toUpperCase();
    this.setState(state);
  }
  onEmailChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value.toLowerCase();
    this.setState(state);
  }

  onBoxClick = (e) => {
    this.setState({
      box: e.target.defaultValue
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, vehicle,
      email, phoneNumber, arrivingTime, leavingTime, plotId } = this.state;

    this.ref.add({
      name,
      vehicle,
      email,
      phoneNumber,
      arrivingTime,
      leavingTime,
      plotId

    }).then((docRef) => {
      this.setState({
        name: '',
        vehicle: '',
        email: '',
        phoneNumber: '',
        arrivingTime: '',
        leavingTime: '',
        plotId: ''
      });
      this.props.history.push("/reserve-place@DMCE")
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
        console.log("email12345", this.state.user.email);

      }
    });
  }

  remainPlace() {
    const rem = (20 - (this.state.count));
    return rem;
  }

  onCollectionUpdate = (querySnapshot) => {
    const dmces = [];
    querySnapshot.forEach((doc) => {
      this.setState({ count: (this.state.count + 1) })
      const { name, vehicle,
        email, phoneNumber, arrivingTime, leavingTime, plotId } = doc.data();
      dmces.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        vehicle,
        email,
        phoneNumber,
        arrivingTime,
        leavingTime,
        plotId
      });
    });
    this.setState({
      dmces
    });
  }

  test(pI){
    let ari= this.state.dmces;
    console.log("test",ari)
    for (const dmce of ari) {
      // let i = document.getElementById(arihant.plotId);
      console.log(555,pI, dmce.plotId)
      if (dmce.plotId === pI ) {
        console.log(444,pI, dmce.plotId)
        return true;
      }
    }
      }

  render() {

    if (!this.state.user) {
      return (
        <div style={{ textAlign: "center" }}>
          <br /><br /><br /><br /><br />
          <h1>You are currently not logged in !</h1>
          <h3>You have to <a href="/login"><b>log in</b></a></h3>
          <h4>to reserve a parking..!</h4>
          <Loadman />
        </div>
      );
    }


    const { name, vehicle,
      email, phoneNumber, arrivingTime, leavingTime, plotId } = this.state;
    return (
      <div className="container">
        <div>
          <section id="contact">
            <div className="container">
              <div className="row">
                <h4 ><Link to="/reserve-place@DMCE" className="btn custom-btn btn-info"><span className="glyphicon glyphicon-list fa-2x" style={{ marginRight: '4%' }} ></span>WATCH THE LIST</Link></h4>

                <div className="colmd-12">
                  <div className="contact_area text-center" >
                    <h3 style={{ marginTop: '-4%', marginLeft: '22%', marginRight: '20%' }} >DMCE, airoli</h3>
                    <h2 style={{ marginTop: '-1%', marginLeft: '13%', marginRight: '13%' }}>Sector 3, Airoli, Navi Mumbai, Maharashtra 400708</h2>
                    {/* <h2>sanju: {this.test()} </h2> */}
                  </div>
                </div>
              </div>
              {this.state.dmces.map((as, e) =>

                <div>
                  <h5>{as.plotId === this.state.box ? (alert('this place is booked..!')) : (<div></div>)}</h5>
                  {/* <h5>{arihant.plotId ? (console.log(this.state.box)) : (console.log("testing complete"))}</h5> */}

                </div>
              )}
              <div style={{ marginTop: '-6%' }} >
                <div className="seat-container" style={{ marginTop: '15%' }} >
                  {/* <h1 style={{textAlign:"center",fontFamily:'italic bold'}}>Available Parking</h1> */}
                  <div className="funkyradio-primary" style={{ overflowX: 'auto', textAlign: 'center', marginLeft: '25%' }}>
                    <p id="notification" />
                    {this.state.box ? (<div><h3 style={{ marginLeft: '-40%' }}><u>{this.state.box}</u></h3><br /><h5 style={{ color: 'red', marginTop: '-5%', textAlign: 'left' }} >* Enter the above <b style={{ color: 'green' }}>Plot Id</b> into form</h5></div>)
                      : (<div><div><h3 style={{ marginLeft: '-40%' }}><u>NULL</u></h3><br /><h5 style={{ color: 'red', marginTop: '-5%', textAlign: 'left' }} >* select a  <b style={{ color: 'green' }}>Parking Lot</b> from given lots</h5></div></div>)}
                    <table className="squaredOne">
                      <tbody><tr>
                        <td />
                        <td style={{ fontSize: '23px' }}><b>1</b></td>
                        <td style={{ fontSize: '23px' }}><b>2</b></td>
                        <td style={{ fontSize: '23px' }}><b>3</b></td>
                        <td style={{ fontSize: '23px' }}><b>4</b></td>
                        <td style={{ fontSize: '23px' }}><b>5</b></td>
                        <td />
                      </tr>
                        <tr>
                          <td style={{ fontSize: '23px' }}><b>A</b></td>

                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="A1" id='A1' checked={this.test('A1')} />

                              <span className="checkmark" ></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="A2" checked={this.test('A2')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="A3" id='A3' checked={this.test('A3')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td className="form-check">
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="A4" checked={this.test('A4')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="A5" checked={this.test('A5')}/>
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: '23px' }}>B</td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="B1" checked={this.test('B1')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="B2" checked={this.test('B2')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="B3" checked={this.test('B3')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td className="form-check">
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="B4" checked={this.test("B4")} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="B5" checked={this.test('B5')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          {/* <td /> */}
                        </tr>

                        <tr>
                          <td style={{ fontSize: '23px' }}>C</td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="C1" checked={this.test('C1')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="C2" id='C2' checked={this.test('C2')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="C3" id='C3' checked={this.test('C3')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td className="form-check">
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="C4" checked={this.test('C4')} />
                              <span className="checkmark"></span>
                            </label>                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="C5" checked={this.test('C5')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <td style={{ fontSize: '23px' }}>D</td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="D1" checked={this.test('D1')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="D2" checked={this.test('D2')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="D3" checked={this.test('D3')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td className="form-check">
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="D4" id="D4" checked={this.test('D4')} />
                              <span className="checkmark"></span>
                            </label>                          </td>
                          <td>
                            <label className="check-container">
                              <input type="checkbox" onClick={this.onBoxClick} defaultValue="D5" id='D5' checked={this.test('D5')} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        
                        </tr>
                       
                      </tbody></table>

                  </div>
                  {/* //details after booking displayed here */}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="office">
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="msg">
                    <div className="msg_title">
                      <h5><b>' {this.remainPlace()} ' </b> Parkings Available</h5>
                    </div>
                    <div className="form_area">
                      {/* <!-- CONTACT FORM --> */}
                      <div className="contact-form wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s">
                        <div id="message"></div>
                        <form onSubmit={this.onSubmit} className="form-horizontal contact-1" role="form" name="contactform" id="contactform">
                          <div className="form-group">
                            <div className="col-sm-10">
                              <input type="text" className="form-control" onChange={this.onChange} value={plotId} name="plotId" id="name" placeholder="PLOT ID" />
                            </div>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" onChange={this.onChange} value={name} name="name" id="name" placeholder="FULL NAME" required />
                            </div>
                            {/* <div className="col-sm-6">
                          <input type="text" className="form-control" onChange={this.onChange} value={lastName} name="lastName" id="name" placeholder="LAST NAME" />
                        </div> */}

                          </div>
                          <div className="form-group">
                            <div className="col-sm-5">
                              <input type="text" className="form-control" onChange={this.onEmailChange} value={email} name="email" id="email" placeholder="EMAIL" list="Emails" autocomplete="off" />
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

export default CreateDmce;
