import React from 'react';
import './App.css';
import GithubProfileSearch from "./components/github/GithubProfileSearch";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
                    <a href="/" className="navbar-brand">React with Github Profile Search App</a>
                </nav>

                <GithubProfileSearch/>

                <div style={{marginBottom : '200px'}}/>
            </React.Fragment>
        );
    }

}

export default App;
