import React from "react";

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                            <h3 className="display-3">React Routing</h3>
                            <p className="lead px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos ducimus earum enim, error facilis fuga harum, maiores maxime nesciunt nisi nobis odio officia, officiis soluta. Assumenda error fuga laudantium!</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;
