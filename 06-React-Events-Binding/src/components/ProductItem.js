import React from "react";

class ProductItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product : {
                id : 'AA101AC',
                image : 'https://images-na.ssl-images-amazon.com/images/I/61v3DQL0seL._SX342_.jpg',
                name : 'Philips Light',
                qty : 2,
                price : 550
            }
        }
    }

    incrQty = () => {
        this.setState({
            product : {
                ...this.state.product,
                qty : this.state.product.qty + 1
            }
        });
    };

    decrQty = () => {
        this.setState({
            product : {
                ...this.state.product,
                qty : (this.state.product.qty - 1) > 0 ? this.state.product.qty - 1 : 1
            }
        });
    };

    render() {
        let {id , image , name , qty , price} = this.state.product;
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Products Cart</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur excepturi perferendis quam veritatis? Aperiam omnis, sapiente! Facilis, perspiciatis sequi? Accusamus aliquam dolorem eius ex magni nesciunt, odit quas sunt tempora?</p>
                        </div>
                    </div>
                    <pre>{JSON.stringify(this.state.product)}</pre>
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped table-light">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{id}</td>
                                        <td>
                                            <img src={image} alt="" width="50" height="50"/>
                                        </td>
                                        <td>{name}</td>
                                        <td>&#8377; {price.toFixed(2)}</td>
                                        <td>
                                            <i className="fa fa-minus-circle mx-1" onClick={this.decrQty}/>
                                            {qty}
                                            <i className="fa fa-plus-circle mx-1" onClick={this.incrQty}/>
                                        </td>
                                        <td>&#8377; {(price * qty).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ProductItem;
