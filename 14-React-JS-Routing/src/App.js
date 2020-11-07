import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Employees from "./components/employees/Employees";
import Stocks from "./components/stocks/Stocks";
import About from "./components/layout/About";
import EmployeeDetails from "./components/employees/EmployeeDetails";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/employees/list" component={Employees}/>
                        <Route exact path="/employees/:id" component={EmployeeDetails}/>
                        <Route exact path="/stocks/list" component={Stocks}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }

}

export default App;
