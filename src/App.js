
import React, { Component } from 'react';
import { ReactRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (

        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr />

          <Route exact path="/" render={()=> <div><h2>Home</h2></div>} />
          <Route path="/about" render={()=> <div><h2>About</h2></div>} />
        </div>

    );
  }
}

export default App;