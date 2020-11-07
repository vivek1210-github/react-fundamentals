import React from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';

class Employees extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        let dataURL = `https://gist.githubusercontent.com/thenaveensaggam/c367a0ea4259218222f959895636a6f1/raw/cc145cf94af9b313ff8cc7fdeb6e5decdce149f0/employees-30092020.json`;
        Axios.get(dataURL).then((response) => {
            this.setState({
                ...this.state,
                employees : response.data
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
                           <p className="h3">Welcome to Employees</p>
                           <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi at corporis cupiditate, eius ex facere facilis in inventore odio officiis quis quo, repudiandae sed similique tenetur totam unde voluptatum!</p>
                       </div>
                   </div>
                {/*   <pre>{JSON.stringify(this.state.employees)}</pre>*/}
                   <div className="row">
                       <div className="col">
                           <table className="table table-hover text-center table-striped table-light">
                               <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>NAME</th>
                                    <th>AGE</th>
                                    <th>EMAIL</th>
                                    <th>LOCATION</th>
                                </tr>
                               </thead>
                               <tbody>
                                    {
                                        this.state.employees.length > 0 ?
                                        <React.Fragment>
                                            {
                                                this.state.employees.map(employee => {
                                                    return(
                                                        <tr key={employee.login.uuid}>
                                                            <td>{employee.login.uuid.substr(employee.login.uuid.length - 5)}</td>
                                                            <td>
                                                                <img src={employee.picture.large} alt="" width="50" height="50"/>
                                                            </td>
                                                            <td>
                                                                <Link to={`/employees/${employee.login.uuid}`} className="text-primary font-weight-bold">{employee.name.first} {employee.name.last}</Link>
                                                            </td>
                                                            <td>{employee.dob.age} Yrs</td>
                                                            <td>{employee.email}</td>
                                                            <td>{employee.location.city}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : null
                                    }
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        );
    }
}
export default Employees;
