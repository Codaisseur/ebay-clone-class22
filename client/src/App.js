import React, { Component } from 'react';
import './App.css';
import request from 'superagent'

const baseUrl = 'http://localhost:4000'

class App extends Component {
  componentDidMount() {
    request(`${baseUrl}/advertisements`)
      .then(response => {
        console.log(response.body)
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
