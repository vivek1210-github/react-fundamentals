import React from "react";
import UserContext from "./UserContext";

class ComponentThree extends React.Component{
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
                                <div className="card-body bg-danger text-white">
                                    <p className="h4">Component Three</p>
                                    <UserContext.Consumer>
                                        {
                                            (userInfo) => {
                                                return(
                                                    <pre>{JSON.stringify(userInfo)}</pre>
                                                )
                                            }
                                        }
                                    </UserContext.Consumer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ComponentThree;
