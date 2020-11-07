import React from "react";

class RegisterNew extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : {
                username : '',
                email : '',
                password : '',
                designation : '',
                terms : false
            }
        }
    }

    // updateInput
    updateInput = (event) => {
        if(event.target.type === 'checkbox'){
            this.setState({
                user : {
                    ...this.state.user,
                    [event.target.name] : event.target.checked
                }
            });
        }
        else{
            this.setState({
               user : {
                   ...this.state.user,
                   [event.target.name] : event.target.value
               }
            });
        }
    };

    // registerUser
    registerUser = (event) => {
        event.preventDefault(); // to avoid page refresh
        console.log(this.state.user);
    };

    render() {
        let {username , email , password , terms , designation} = this.state.user;
        return (
            <React.Fragment>
               {/* <pre>{JSON.stringify(this.state)}</pre>*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">Register Here</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form onSubmit={this.registerUser}>
                                        <div className="form-group">
                                            <input
                                                name="username"
                                                value={username}
                                                onChange={this.updateInput}
                                                type="text" className="form-control" placeholder='Username'/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                value={email}
                                                onChange={this.updateInput}
                                                type="email" className="form-control" placeholder='Email'/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="password"
                                                value={password}
                                                onChange={this.updateInput}
                                                type="password" className="form-control" placeholder='Password'/>
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control"
                                                    name="designation"
                                                    value={designation}
                                                    onChange={this.updateInput}>
                                                <option value="">Select Designation</option>
                                                <option value="Software Engineer">Software Engineer</option>
                                                <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                                <option value="Team Lead">Team Lead</option>
                                                <option value="Project Manager">Project Manager</option>
                                                <option value="Director">Director</option>
                                            </select>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="terms"
                                                onChange={this.updateInput}
                                                className="form-check-input" type="checkbox"
                                                   id="defaultCheck1"/>
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                   Accept Terms & Conditions
                                                </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" className="btn btn-success btn-sm" value='Register'/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default RegisterNew;
