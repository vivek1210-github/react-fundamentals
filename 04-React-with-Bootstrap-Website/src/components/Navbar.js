import React from "react";

class Navbar extends React.Component{
    render() {
        return (
            <React.Fragment>
               <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                   <div className="container">
                       <a href="/" className="navbar-brand">Hotel Website</a>
                   </div>
               </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;
