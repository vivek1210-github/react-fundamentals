import React from 'react';
import './App.css';
import CountryCards from "./components/CountryCards";

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-primary">
            <a href="/" className="navbar-brand">React JS with Bootstrap</a>
        </nav>
        <CountryCards/>
    </div>
  );
}

export default App;
