import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
import firebase from '../Firebase';
import App from '/home/sanju/react/spark/src/mapBox/App';
import Spinner from '../../Loader/Spinner';

class BadlapurShow extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('badlapurs');
    this.unsubscribe = null;
    this.state = {
      badlapurs: [],count:0
    };
  }

  // authListener = ( ) => {
  onCollectionUpdate = (querySnapshot) => {
    const badlapurs = [];
    querySnapshot.forEach((doc) => {
      this.setState({ count:(this.state.count + 1 )})

      const { name, vehicle,
        email, phoneNumber, arrivingTime, leavingTime } = doc.data();
      badlapurs.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        vehicle,
        email,
        phoneNumber,
        arrivingTime,
        leavingTime
        
      });
    });
    this.setState({
      badlapurs,
   });
  }
// }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    
  }
// ref.once("value", function(snap) {
//    var keys = Object.keys(snap.val()||{});
//   var lastIdInSnapshot = keys[keys.length-1]

//   ref.orderByKey().startAt(lastIdInSnapshot).on("child_added", function(newMessSnapshot) {
//     if( snap.key() === lastIdInSnapshot ) { return; }
//     console.log('new record', snap.key());
//   }
// }
remainPlace(){
  const rem = (4 - (this.state.count));
  return rem; 
}

  render() {
    console.log("didmount",this.state.count);
    if(this.state.count >= 4){
      return(
        <div style={{ textAlign: "center" }}>
          <br /><br /><br /><br /><br />
          <h1>Sorry this place is full !</h1>
          <h3>try for another <a href="/search-maps"><b>place</b></a></h3>
          {/* <h4>for further process</h4> */}
          <Spinner />
        </div>
      );
    }else
      return (
      <section id="contact">
            <div className="container">
              <div className="row">
        <div className="panel panel-default">
        <div className="contact_area text-center">
                    <h3 style={{ fontSize: '190%' }}>kulgaon Badlapur municipal parking</h3>
                  </div><h3 style={{ marginTop: '-1%', marginLeft:'1.5%' }} >Total Entries : {this.state.count} /4</h3>
                  <h3 style={{ textAlign: 'right', marginTop: '-3%', marginRight:'1.5%' }}>' {this.remainPlace()} ' Parkings Available</h3>
          <div className="panel-heading" style={{ marginTop: '-1%' }}>
          <h4><Link to="/create@BADLAPUR" className="btn custom-btn btn-success" title="Press the button to book this place for another vehicle."><i class="fa fa-car fa-2x" aria-hidden="true"></i>Book for Another Vehicle</Link></h4>
            <h4 style={{ textAlign: 'right'}}><Link to="/search-maps" style={{ marginTop: '-7%' }} title="Press the button and it will redirected to map" className="btn custom-btn btn-info"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>Book for Another Place</Link></h4>

            <h3 className="panel-title" style={{ marginTop: '-2%' }} >
              LIST OF USERS
            </h3>
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Vehicle</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Arriving Time</th>
                  <th>Leaving Time</th>
                </tr>
              </thead>
              <tbody>
                {this.state.badlapurs.map(badlapur =>
                  <tr>
                    <td><Link to={`/show/${badlapur.key}`}>{badlapur.name}</Link></td>
                    <td>{badlapur.vehicle}</td>
                    <td>{badlapur.email}</td>
                    <td>{badlapur.phoneNumber}</td>
                    <td>{badlapur.arrivingTime}</td>
                    <td>{badlapur.leavingTime}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    
    {/* <App free={this.state.count} sdk="sanju bhai" /> */}
      </section>
    );
  }
}

export default BadlapurShow;
