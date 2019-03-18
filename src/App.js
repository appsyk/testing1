//import './Bell/css/style.css';

import React from 'react';
import App from './mapBox/App';

class Error extends React.Component {
  render() {
    return (
        <div>
          <h1>Map testing</h1>
          <div style={{ height: '200px', width: '300px' }}>
          <App />
          </div>
        </div>
    );
  }
}  
export default Error;
