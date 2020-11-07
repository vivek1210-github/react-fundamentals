import React from 'react';
import './App.css';
import WelcomeMessage from "./components/WelcomeMessage";
import CarSelector from "./components/CarSelector";
import SMSApp from "./components/SMSApp";
import Register from "./components/Register";
import RegisterNew from "./components/RegisterNew";

function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className="navbar-brand">React with Forms Binding</a>
        </nav>

        {/*<WelcomeMessage/>*/}
       {/* <CarSelector/>*/}
      {/* <SMSApp/>*/}
     {/* <Register/>*/}
        <RegisterNew/>

        <div style={{marginBottom : '200px'}}/>
    </React.Fragment>
  );
}

export default App;
