import React, { Component } from 'react';
import './App.css';
import Router from "./Router";
import NavBar from "./components/home/NavBar";

class App extends Component {
  render() {
    return (
      <div className='App' >
        <NavBar/>
        <Router/>
      </div>
    );
  }
}

export default App;
