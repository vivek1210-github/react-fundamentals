import React from "react";

class Contact extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0424990312217!2d78.44656431487661!3d17.409747988065217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1e907c04ec7%3A0x175dc086cd3b3df1!2sTaj%20Banjara%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1602168773853!5m2!1sen!2sin"
                                        width="500" height="350" frameBorder="0" allowFullScreen=""
                                        aria-hidden="false" tabIndex="0"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <p className="h4">Contact Us</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea rows="4" className="form-control"/>
                                        </div>
                                        <div>
                                            <input type="submit" className="btn btn-dark btn-sm" value="Contact"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Contact;
