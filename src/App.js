import React from 'react';
import logo from './logo.svg';
import MapContainer from './MapContainer.js'
import Poidetail from './Poidetail.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sq: '',
    }
  }

  render() {
    return (
      <div className="App">
          <Router>
            <Route path="/map" exact component={MapContainer} />
            <Route path="/poidetail" component={Poidetail} />
          </Router>
      </div>
    );
  }


  }

  export default App;