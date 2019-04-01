import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
import firebase from '../Firebase';
import Spinner from '../../Loader/Spinner';

class OrionShow extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('orions');
    this.unsubscribe = null;
    this.state = {
      orions: [],count:0
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const orions = [];
    querySnapshot.forEach((doc) => {
      this.setState({ count:(this.state.count + 1 )})

      const { name, vehicle,
        email, phoneNumber, arrivingTime, leavingTime } = doc.data();
      orions.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        vehicle,
        email,
        phoneNumber,
        arrivingTime,
        leavingTime,
      });
    });
    this.setState({
      orions
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  remainPlace() {
    const rem = (9 - (this.state.count));
    return rem;
  }

  render() {
    if (this.state.count >= 9) {
      return (
        <div style={{ textAlign: "center" }}>
          <br /><br /><br /><br /><br />
          <h1>Sorry this place is full !</h1>
          <h3>try for another <a href="/search-maps"><b>place</b></a></h3>
          {/* <h4>for further process</h4> */}
          <Spinner />
        </div>
      );
    } else

      return (

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="panel panel-default">
                <div className="contact_area text-center">
                  <h3 style={{ fontSize: '190%' }}>orion mall, panvel</h3>
                </div>
                <h3 style={{ marginTop: '-1%', marginLeft: '1.5%' }} >Total Entries : {this.state.count} /9</h3>
                <h3 style={{ textAlign: 'right', marginTop: '-3%', marginRight: '1.5%' }}>' {this.remainPlace()} ' Parkings Available</h3>
                <div className="panel-heading" style={{ marginTop: '-1%' }}>
                  <h4><Link to="/create@ORION" className="btn custom-btn btn-success" title="Press the button to book this place for another vehicle."><i class="fa fa-car fa-2x" aria-hidden="true"></i>Book for Another Vehicle</Link></h4>
                  <h4 style={{ textAlign: 'right' }}><Link to="/search-maps" style={{ marginTop: '-7%' }} title="Press the button and it will redirected to map" className="btn custom-btn btn-info"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>Book for Another Place</Link></h4>

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
                      {this.state.orions.map(orion =>
                        <tr>
                          <td><Link to={`/show/${orion.key}`}>{orion.name}</Link></td>
                          <td>{orion.vehicle}</td>
                          <td>{orion.email}</td>
                          <td>{orion.phoneNumber}</td>
                          <td>{orion.arrivingTime}</td>
                          <td>{orion.leavingTime}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  }
}

export default OrionShow;
