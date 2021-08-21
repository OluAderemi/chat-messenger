import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhfOhj-gl0GYYe7788ZwjeGX0UzkHRNwI",
    authDomain: "olu-chat-messenger.firebaseapp.com",
    projectId: "olu-chat-messenger",
    storageBucket: "olu-chat-messenger.appspot.com",
    messagingSenderId: "643347155749",
    appId: "1:643347155749:web:c93f6d9da968304ca128cc",
    measurementId: "G-PKT6N8C9S8"
  };

  firebase.initializeApp(firebaseConfig);

  window.store = store;

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
