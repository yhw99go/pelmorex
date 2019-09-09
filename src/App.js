import React from 'react';
import logo from './logo.svg';
import GoogleMapWrapper from './GoogleMapWrapper.js'
import Poidetail from './Poidetail.js'
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <BrowserRouter>
          <HeaderComponent />
            <div>
                <Route exact path="/map" component={GoogleMapWrapper} />
                <Route path="/poidetail" component={Poidetail} />
            </div>
          </BrowserRouter>
      </div>
    );
  } 
}

const HeaderComponent = () => {
  return (
      <div className="App-header"><Link to="/map"><img src={logo} className="App-logo" alt="logo" /></Link></div>
  )
}

export default App;
