import React from "react";

class Student extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image : 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vijay_deverakonda_13416_27-07-2016_11-17-19.jpg',
            name : 'Arjun Reddy',
            age : 23,
            course : 'MBBS',
            college : 'Osmania Medical College',
            address : 'Hyderabad'
        }
    }

    render() {
        return (
            <React.Fragment>
               <div className="container mt-3">
                   <div className="row">
                       <div className="col">
                           <div className="card">
                               <div className="card-header bg-primary text-white">
                                   <p className="h4">Student Details</p>
                               </div>
                               <div className="card-body bg-light">
                                   <div className="row">
                                       <div className="col-md-4 text-center">
                                           <img src={this.state.image} alt="" className="img-fluid img-thumbnail"/>
                                       </div>
                                       <div className="col-md-8">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                NAME : <span className="font-weight-bold">{this.state.name}</span>
                                            </li>
                                            <li className="list-group-item">
                                                AGE : {this.state.age} yrs.
                                            </li>
                                            <li className="list-group-item">
                                                COLLEGE : {this.state.college}
                                            </li>
                                            <li className="list-group-item">
                                                ADDRESS : {this.state.address}
                                            </li>
                                        </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        );
    }

}
export default Student;
