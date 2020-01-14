import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

//Components
import Navbar from './components/nav/Navbar';

//Pages
import Home from './routes/Home';
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import Signup from "./routes/Signup";

//Redux
import {Provider} from 'react-redux';
import store from './redux/store';
import {SET_AUTH} from './redux/types';
import { getUserData } from './redux/actions/userActions';

//Auth
import jwtDecode from 'jwt-decode';
import axios from 'axios';

axios.defaults.baseURL = 'https://us-central1-mydocs-3a1ce.cloudfunctions.net/api';

const token = localStorage.FBIdToken;
if (token){
  const decodedToken = jwtDecode(token);
  //console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()){
    //Expired token
    //window.location.href = '/login';
    //store.dispatch(logoutUser());
    //window.location.href = '/';
  }
  else {
    store.dispatch({ type: SET_AUTH }); 
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
