import React from 'react';
import './App.css';
import ParentComponent from "./components/basic/ParentComponent";
import ParentCard from "./components/intermediate/ParentCard";
import ClientCard from "./components/advanced/ClientCard";
import ServerCard from "./components/advanced/ServerCard";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clientMessage : '',
            serverMessage : ''
        }
    }

    receiveClientData = (data) => {
        this.setState({
            clientMessage : data
        })
    };

    receiveServerData = (data) => {
        this.setState({
            serverMessage : data
        })
    };

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
                    <a href="/" className="navbar-brand">React with Component Interaction</a>
                </nav>

                {/* <ParentComponent/>*/}
                {/* <ParentCard/>*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4 offset-1">
                            <ClientCard sendData={this.receiveClientData} serverMessage={this.state.serverMessage}/>
                        </div>
                        <div className="col-md-4 offset-1">
                            <ServerCard clientMessage={this.state.clientMessage} sendData={this.receiveServerData}/>
                        </div>
                    </div>
                </div>

                <div style={{marginBottom : '200px'}}/>
            </React.Fragment>
        );
    }

}

export default App;
