import React from "react";

class ComponentC extends React.Component{
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
                                <div className="card-body bg-warning text-white">
                                    <p className="h4">Component C</p>
                                    <pre>{JSON.stringify(this.props.userInfo)}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ComponentC;
