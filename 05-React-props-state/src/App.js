import React from 'react';
import './App.css';
import MessageCard from "./components/MessageCard";
import Student from "./components/Student";

function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className="navbar-brand">React with Props & State</a>
        </nav>

       {/* <MessageCard name="Mahesh" age="25" designation="Software Engineer"/>
        <MessageCard name="Rajan" age="35" designation="Tech Lead"/>
        <MessageCard name="John" age="45" designation="Project Manager"/>
        <MessageCard name="Wilson" age="55" designation="Director"/>*/}

        <Student/>

        <div style={{marginBottom : '200px'}}/>
    </React.Fragment>
  );
}

export default App;
