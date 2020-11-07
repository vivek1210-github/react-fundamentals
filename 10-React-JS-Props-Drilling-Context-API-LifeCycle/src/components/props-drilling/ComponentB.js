import React from "react";
import ComponentC from "./ComponentC";

class ComponentB extends React.Component{
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
                                <div className="card-body bg-secondary text-white">
                                    <p className="h4">Component B</p>
                                    <pre>{JSON.stringify(this.props.userInfo)}</pre>
                                    <ComponentC userInfo={this.props.userInfo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ComponentB;
