// import logo from './logo.svg';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import { isLoggedInUser } from './actions';


function App() {
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch()

  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  }, []);

  return (
    <div className="App">
    <Router>
    {/* for only logged in users */}
      <PrivateRoute path="/" exact component={HomePage} />


      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={RegisterPage} />
    </Router>
      
    </div>
  );
}

export default App;
