import React from "react";
import {NavLink ,Link} from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand" activeClassName="not">React Routing</NavLink>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item px-2">
                                    <NavLink to="/" className="nav-link" activeClassName="not">Home</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink to="/employees/list" className="nav-link" activeClassName="active">Employees</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink to="/stocks/list" className="nav-link" activeClassName="active">Stocks</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;
