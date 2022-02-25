import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC7mV11eO14qrS-0ApRa0eOImACh6AtMUk",
  authDomain: "idobatakaigi-with-ham-fo-5aee8.firebaseapp.com",
  databaseURL: "https://idobatakaigi-with-ham-fo-5aee8-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi-with-ham-fo-5aee8",
  storageBucket: "idobatakaigi-with-ham-fo-5aee8.appspot.com",
  messagingSenderId: "11099453109",
  appId: "1:11099453109:web:8aac98a5a3613b3b8130fc",
  measurementId: "G-BEXT2EFEXV"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages')

export const pushMessage = ({name, text}) => {
  messagesRef.push({name, text})
};


