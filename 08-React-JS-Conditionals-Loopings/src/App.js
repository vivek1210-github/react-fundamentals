import React from 'react';
import './App.css';
import AuthUser from "./components/AuthUser";
import HobbySelector from "./components/HobbySelector";
import HobbySelectorRadio from "./components/HobbySelectorRadio";
import EmployeeCard from "./components/EmployeeCard";
import Customers from "./components/Customers";

function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className="navbar-brand">React with Conditional & Looping</a>
        </nav>

       {/* <AuthUser/>*/}
       {/*<HobbySelector/>*/}
       {/*<HobbySelectorRadio/>*/}
       {/*<EmployeeCard/>*/}

       <Customers/>

        <div style={{marginBottom : '200px'}}/>
    </React.Fragment>
  );
}

export default App;
