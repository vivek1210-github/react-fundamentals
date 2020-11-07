import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import CountryCards from "./components/CountryCards";
import Contact from "./components/Contact";
import InfoBox from "./components/InfoBox";

function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <LandingPage/>
        <CountryCards/>
        <InfoBox/>
        <Contact/>
        <div style={{marginBottom : '200px'}}/>
    </React.Fragment>
  );
}

export default App;
