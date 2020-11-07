import React from "react";

class MessageCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello'
        }
    }

    sayGoodEvening = () => {
        this.setState({
            message : 'Good Evening'
        });
    };

    sayGoodMorning = (value) => {
        this.setState({
            message : value
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h2>{this.state.message}</h2>
                                    <button onClick={this.sayGoodEvening} className="btn btn-success btn-sm">Good Evening</button>
                                    <button onClick={this.sayGoodMorning.bind(this, 'Good Morning')} className="btn btn-warning btn-sm">Good Morning</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default MessageCard;
