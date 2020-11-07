import React from "react";
import ComponentTwo from "./ComponentTwo";

class ComponentOne extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-success text-white">
                                    <p className="h4">Component One</p>
                                    <ComponentTwo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ComponentOne;
