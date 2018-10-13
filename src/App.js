import React, { Component } from 'react';
import './App.css';
import AccountInfoForm from './forms/AccountInfoForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>
            Account info app
          </h4>

        </header>
        <div className="container">
          <AccountInfoForm />
        </div>
      </div>
    );
  }
}

export default App;
