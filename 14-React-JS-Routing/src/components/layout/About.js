import React from "react";

class About extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">About Us</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat mollitia quo sunt! Assumenda delectus ducimus et excepturi, facilis fugiat impedit inventore iste maiores maxime molestias natus quisquam, quod repellat sit?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="h5">App Name :
                                <span className="font-weight-bold"> React Routing Example</span>
                            </p>
                            <p className="h5">Version :
                                <span className="font-weight-bold"> 1.0.4</span>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default About;
