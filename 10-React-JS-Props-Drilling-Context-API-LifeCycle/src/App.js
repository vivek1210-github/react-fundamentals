import React from 'react';
import './App.css';
import ComponentA from "./components/props-drilling/ComponentA";
import ComponentOne from "./components/context-api/ComponentOne";
import UserContext from "./components/context-api/UserContext";
import DigitalWatch from "./components/life-cycle/DigitalWatch";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                author : 'NAVEEN SAGGAM',
                channel : 'UiBrains Technologies'
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
                    <a href="/" className="navbar-brand">React with Props Drilling & Context API</a>
                </nav>

                {/* -------------- Props Drilling Example -------------- */}
                {/*<div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <p className="h4">App Component</p>
                                    <pre>{JSON.stringify(this.state.userInfo)}</pre>
                                    <ComponentA userInfo={this.state.userInfo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}

                {/* -------------- Context API Example -------------- */}
                {/*<div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <p className="h4">App Component</p>
                                    <pre>{JSON.stringify(this.state.userInfo)}</pre>

                                    <UserContext.Provider value={this.state.userInfo}>
                                        <ComponentOne/>
                                    </UserContext.Provider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}

                {/* -------------- Component LifeCycle ------------- */}
                <DigitalWatch/>

                <div style={{marginBottom : '200px'}}/>
            </React.Fragment>
        );
    }

}

export default App;
