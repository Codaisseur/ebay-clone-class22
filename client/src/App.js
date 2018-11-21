import React, { Component } from 'react';
import './App.css';
import AdsList from './ads-list';
import AdForm from './ad-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdForm />     
        <AdsList /> 
      </div>
    );
  }
}

export default App;
