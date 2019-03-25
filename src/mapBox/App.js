import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';
// import Header from '../NavBar/Header';
import { NavLink } from 'react-router-dom';
import Login from '../LoginStyle/Login';
import CurrentLocation from './Map';
import LoginApp from '../LoginStyle/App';
import firebase from '../reserveForm/Firebase';
import Spinner from '../Loader/Spinner';



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    showForm: false,
    user: null
  };

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

  onMark = (e) => {
    console.log("sanjay bhai login page kdhi yenar");
    this.setState({
      showForm: true,
    });
  };

  //   componentDidMount() {
  //     this.markListener();
  // }

  markListener = (props) => {
    if (this.state.showForm === true) {
      return (
        <div>
          <Login />
        </div>
      )
    }
  };

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



  iconMarker = new window.google.maps.MarkerImage(
    'https://cdn4.iconfinder.com/data/icons/usefull-geo-points-for-maps/512/parking-place-geo-point-location-512.png',
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new window.google.maps.Size(50, 50)
  );


  render(props) {
    console.log("mapProps", this.props.emlmap );
    if (this.state.showForm === true) {
      return (
        <div>
          <LoginApp />
        </div>
      );
    } else
       console.log("this will giv you Lat and Lng of current Location..", this.state.selectedPlace.mapCenter);
      // console.log(999, this.state.selectedPlace.mapCenter.lng);

  //  console.log(999, this.props.google);
  //  console.log(999, this.state.showForm);
    console.log(999, this.state.fields);

    return (
      <div>
        {/* <Header />  */}

        <div>
          <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
            <Marker
              onClick={this.onMarkerClick}
              name={'Your location'}
              title={'Your location'} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                {/* <button onClick={this.onMark}>Login</button> */}
              </div>
            </InfoWindow>
            <Marker
              onClick={this.onMarkerClick}
              //options={{icon: 'https://cdn4.iconfinder.com/data/icons/usefull-geo-points-for-maps/512/parking-place-geo-point-location-512.png', scaledSize:(12,12), size: '12,12'}}
              icon={this.iconMarker}
              title={'Airoli Station parking'}
              name={'Airoli Station parking'}
              addrs={'Sector 3, Airoli, Navi Mumbai, Maharashtra 400708'}
              img=      {'https://lh5.googleusercontent.com/p/AF1QipMhD0murA228gczv9D9QYUw_B06U9XnA1h8_In4=w408-h229-k-no'}
              position={{ lat: 19.1596806, lng: 72.9986323 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Datta Meghe College Of Engineering,Airoli'}
              name={'Datta Meghe College Of Engineering,Airoli'}
              addrs={'Sector 3,Airoli Navi  Mumbai,Maharashtra 400708'}
              img={'https://edumateengg.com/custom/images/Datta.jpg'}
              position={{ lat: 19.1580995, lng: 72.9943447 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Pay & Park'}
              name={'Pay & Park'}
              addrs={'Plot No.31, Vaishakh Marg, Sector 2, New Panvel East, Panvel, Navi Mumbai, Maharashtra 410206'}
              img={'https://lh3.googleusercontent.com/p/AF1QipOM-SpCpYiIuQqPaBD-NWNm8fH-f510_W7_d6GS=s0'}
              position={{ lat: 18.9911581, lng: 73.1232492 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking, Panvel'}
              name={'Parking, Panvel'}
              position={{ lat: 18.9918067, lng: 73.122032 }} />
           <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking,KoparKhairne'}
              name={'Parking,KoparKhairane'}
              addrs={'RS Regency Road, Kopar Khairane, Navi Mumbai, Maharashtra 400709'}
              img={'https://lh3.googleusercontent.com/p/AF1QipPbDoyNvIYfzyqQOempbrjj9Q2yrNwkLmOGu9bT=s0'}
              
              position={{ lat: 19.103879, lng: 73.0117614 }} />

            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'voltas Praking'}
              name={'Voltas Prking'}
              position={{ lat: 18.9646497, lng: 72.7990557 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Bike Parking'}
              name={'Bike Parking'}
              position={{ lat: 19.0381493, lng: 72.8590869 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Badlapur'}
              name={'Badlapur'}
              addrs={'Station Rd, Patil Pada, Kulgaon, Badlapur, Maharashtra 421503'}
              img={'https://lh3.googleusercontent.com/p/AF1QipNfT2c8R-abKhNHxi3rfjTxW9Htwgx6_RZhM8Cn=s0'}
              position={{ lat: 19.1667863, lng: 73.2379882 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking'}
              name={'Parking'}
              img={'https://lh3.googleusercontent.com/p/AF1QipM3SrxRoNseXGFWA6tJZJcbgf3Q5bvOEuqxKxxl=s0'}

              position={{ lat: 19.1141415, lng: 72.9884291 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking place for 2 and 4 wheelers underground'}
              name={'Parking place for 2 and 4 wheelers underground'}
              position={{ lat: 19.1979305, lng: 72.9185063 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking Lot'}
              name={'Parking Lot'}
              position={{ lat: 19.2196375, lng: 72.9572959 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking,Ghansoli'}
              name={'Parking,Ghansoli'}
              position={{ lat: 19.103879, lng: 73.0117614 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Arihant Parking Systems'}
              name={'Arihant Parking Systems'}
              img={'https://lh3.googleusercontent.com/p/AF1QipM-oqvZ05gDilGO-_DIH3nZFiF6n-eDLU4D6UJg=s0'}
              addrs={'R-399, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701'}
              position={{ lat: 19.1228043, lng: 73.0132679 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'RCP Parking P13'}
              name={'RCP Parking P13'}
              img={'https://lh3.googleusercontent.com/p/AF1QipPBGnimDYqIyS463e1JIkrW5BwyJfDwCAP5VDfE=s0'}
              addrs={'Unnamed Rd, Reliance Corporate Park, MIDC Industrial Area, Ghansoli, Navi Mumbai, Maharashtra 400701'}
              position={{ lat: 19.1272599, lng: 73.0099789 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'CSP Society Parking'}
              name={'CSP Society Parking'}
              addrs={'Pandit Jawaharlal Nehru Rd, Hira Nagar, Mulund West, Mumbai, Maharashtra 400080'}
              img={'https://lh3.googleusercontent.com/p/AF1QipN5yIXZviAXOFRzQw0zlShnjV31nUMfwiGuDqmv=s0'}

              position={{ lat: 19.1633806, lng: 72.9450292 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Orion Mall, Panvel'}
              name={'Orion Mall, Panvel'}
              addrs={'Bus Depot, Final Plot No 311, Near ST, Forest Colony, Panvel, Navi Mumbai, Maharashtra 410206'}
              img={'http://rma-upload.s3.amazonaws.com/2016_04_20_04_07_45Orion_Mall_11.jpg'}
              // spin={<Spinner />}
              position={{ lat: 18.9931809, lng:73.1154138 } } />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
              onClick={this.onMark}
            >
              <div>
                <h2>{this.state.selectedPlace.name}</h2>
                <h4 style={{ marginRight: '50%' }}>{this.state.selectedPlace.addrs}</h4>
                {this.state.selectedPlace.spin}
                <img src={this.state.selectedPlace.img} alt={this.state.selectedPlace.name} style={{ height:'50%', width:'60%'}} />
                {this.state.user ? (<a href="/reserve-ur-place"><button className="button"><b>Park Here</b></button></a>):(<a href="/login"><button className="button">Park Here</button></a>)}
              </div>
            </InfoWindow>

            {/* <Marker
              onClick={this.onMark}
              icon={this.iconMarker}
              title={'Orion Mall, Panvel'}
              name={'Orion Mall, Panvel'}
              position={{ lat: 18.9932136, lng: 73.1155214 }} /> */}

          </CurrentLocation>

          {/* <Map
                  google={this.props.google}
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                  initialCenter={this.state.fields.location}
                  center={this.state.fields.location}
                  zoom={14}
                  onClick={(t, map, c) => this.addMarker(
                    lat=c.latLng.lat(),
                    lng=c.latlng.lng()
                  , map)}
                >
                  <Marker position={this.state.fields.location} />
                </Map> */}

        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE'
})(MapContainer);
