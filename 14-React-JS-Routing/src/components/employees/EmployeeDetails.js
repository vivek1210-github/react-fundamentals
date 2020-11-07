import React from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';

class EmployeeDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedEmployee : {},
            errorMessage : ''
        }
    }

    componentDidMount() {
        let dataURL = `https://gist.githubusercontent.com/thenaveensaggam/c367a0ea4259218222f959895636a6f1/raw/cc145cf94af9b313ff8cc7fdeb6e5decdce149f0/employees-30092020.json`;
        Axios.get(dataURL).then((response) => {
            let employeeId = this.props.match.params.id;
            let employees = response.data;
            let selectedEmployee = employees.find(employee => employee.login.uuid === employeeId);
            this.setState({
                ...this.state,
                selectedEmployee : selectedEmployee
            });
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMessage : error.message
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Employee Details</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore doloribus ducimus ea eligendi fugit, harum id neque nisi non quas quos vitae voluptate voluptatem voluptates. Hic illum quo vel!</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {
                            Object.keys(this.state.selectedEmployee).length > 0 ?
                                <React.Fragment>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-header bg-dark text-white">
                                                <p className="h4">{this.state.selectedEmployee.name.first} {this.state.selectedEmployee.name.last}</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-md-3 text-center">
                                                        <img src={this.state.selectedEmployee.picture.large} className="img-fluid img-thumbnail" alt=""/>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <ul className="list-group mt-3">
                                                            <li className="list-group-item list-group-item-light">
                                                                NAME : {this.state.selectedEmployee.name.first} {this.state.selectedEmployee.name.last}
                                                            </li>
                                                            <li className="list-group-item list-group-item-light">
                                                                {this.state.selectedEmployee.email}
                                                            </li>
                                                            <li className="list-group-item list-group-item-light">
                                                                AGE : {this.state.selectedEmployee.dob.age} Yrs.
                                                            </li>
                                                            <li className="list-group-item list-group-item-light">
                                                                City : {this.state.selectedEmployee.location.city}
                                                            </li>
                                                            <li className="list-group-item list-group-item-light">
                                                                State : {this.state.selectedEmployee.location.state}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <Link to='/employees/list' className="btn btn-dark btn-sm">Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default EmployeeDetails;
