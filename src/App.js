import React from 'react';
import logo from './logo.svg';
import MapContainer from './MapContainer.js'
import Poidetail from './Poidetail.js'
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
      <div className="App">
          <Route path="/map" exact component={MapContainer} />
          <Route path="/poidetail" component={Poidetail} />
      </div>
      </Router>
    );
  } 


  }

  export default App;