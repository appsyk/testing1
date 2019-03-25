//import './Bell/css/style.css';

import React from 'react';
// import App from './mapBox/App';
import axios from 'axios';

class Error extends React.Component {

  state={ selectedFile: null }
  onInputHandler = (event) => {
    // console.log(this.state.selectedFile);
    this.setState({ selectedFile: event.target.files[0] })  }
    

  onUploads = (e) => {
    console.log(this.state.selectedFile);
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('https://firebasestorage.googleapis.com/v0/b/to-do-atom19.appspot.com/',fd)
    .then(res => {
      console.log(res);
    });
  }
  render() {
    return (
        <div>
          <h1>Map testing</h1>
          <input type="file" onClick={this.onInputHandler} />
          <button onClick={this.onUploads}>Uploads</button>
        
        </div>
    );
  }
}  
export default Error;
