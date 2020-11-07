import React from "react";

class Card extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.cardImg} className="img-fluid" alt=""/>
                    <div className="card-body">
                        <p className="h4">{this.props.countryName}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi consequatur ipsum iste maxime non quae quisquam quod repudiandae saepe.</p>
                        <button className="btn btn-dark btn-sm">Read More</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Card;
