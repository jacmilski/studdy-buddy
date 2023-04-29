import React from 'react';
import logo from 'assets/logo.svg';
import 'views/App.css';

console.log("hello");

function App() {
  return (
    <div className="app">
      <h1>Testowa zmiana 2</h1>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
