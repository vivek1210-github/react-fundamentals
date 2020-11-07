import React from 'react';
import './App.css';
import MessageCard from "./components/MessageCard";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className="navbar-brand">React with Events Binding</a>
        </nav>

        {/*<MessageCard/>*/}
        <ProductItem/>

        <div style={{marginBottom : '200px'}}/>
    </React.Fragment>
  );
}

export default App;
