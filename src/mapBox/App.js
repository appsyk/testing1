import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';
// import Header from '../NavBar/Header';
import { NavLink } from 'react-router-dom';
import Login from '../LoginStyle/Login';
import CurrentLocation from './Map';
import LoginApp from '../LoginStyle/App';



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    showForm: false
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

  onMark = () => {
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



  iconMarker = new window.google.maps.MarkerImage(
    'https://cdn4.iconfinder.com/data/icons/usefull-geo-points-for-maps/512/parking-place-geo-point-location-512.png',
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new window.google.maps.Size(50, 50)
  );


  render() {
    if (this.state.showForm === true) {
      return (
        <div>
          <LoginApp />
        </div>
      );
    } else
      console.log(999, this.state.selectedPlace.mapCenter);
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
              position={{ lat: 19.157146, lng: 72.9964705 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Datta Meghe College Of Engineering,Airoli'}
              name={'Datta Meghe College Of Engineering,Airoli'}
              position={{ lat: 19.1580995, lng: 72.9943447 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Pay & Park'}
              name={'Pay & Park'}
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
              title={'Dasturi Car Parking'}
              name={'Dasturi Car Parking'}
              position={{ lat: 19.0335708, lng: 73.1982217 }} />
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
              position={{ lat: 19.1667863, lng: 73.2379882 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking'}
              name={'Parking'}
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
              position={{ lat: 19.1228043, lng: 73.0132679 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'RCP Parking P13'}
              name={'RCP Parking P13'}
              position={{ lat: 19.1272599, lng: 73.0099789 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'CSP Society Parking'}
              name={'CSP Society Parking'}
              position={{ lat: 19.1633806, lng: 72.9450292 }} />
            <Marker
              className="backgrnd"
              style={{ backgroundColor: 'cyan' }}
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Orion Mall, Panvel'}
              name={'Orion Mall, Panvel'}
              position={{ lat: 18.9931809
              ,lng:73.1154138 } } />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                <img src="http://rma-upload.s3.amazonaws.com/2016_04_20_04_07_45Orion_Mall_11.jpg" alt={this.state.selectedPlace.name} style={{ height:'50%', width:'60%'}} />
                {/* <button onClick={this.onMark}><NavLink to='/login'>Park Here</NavLink></button> */}
                <a href="/login"><button className="button">Park Here</button></a>
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
