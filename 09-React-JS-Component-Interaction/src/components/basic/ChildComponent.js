import React from "react";

class ChildComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            wishMessage : 'Hello Iam from Child'
        };
    }

    clickButton = () => {
        this.props.sendData(this.state.wishMessage);
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <p className="h3">Child Component</p>
                                    <span>{this.props.message}</span>
                                    <button className="btn btn-secondary btn-sm" onClick={this.clickButton}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ChildComponent;
