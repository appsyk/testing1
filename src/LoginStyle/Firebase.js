import firebase from 'firebase';
//<script src="https://www.gstatic.com/firebasejs/5.8.2/firebase.js"></script>

  const config = {
    apiKey: "AIzaSyBlPdNa54Y_aiNPDcLfUSLZkqwtWCzPXlA",
    authDomain: "sanju-f634e.firebaseapp.com",
    databaseURL: "https://sanju-f634e.firebaseio.com",
    projectId: "sanju-f634e",
    storageBucket: "sanju-f634e.appspot.com",
    messagingSenderId: "292162426421"
  };

  const fire = firebase.initializeApp(config);
  
  export default fire;
