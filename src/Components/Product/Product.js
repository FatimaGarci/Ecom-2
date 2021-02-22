import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img className="product-img" alt="Makeup" src={this.props.item.img}/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" class = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 className="title">{this.props.item.title}</h2>
                                <div className = "rating">
                                    <span ><i className= "fas fa-star"></i></span>
                                    <span><i className= "fas fa-star"></i></span>
                                    <span><i className= "fas fa-star"></i></span>
                                    <span><i className= "fas fa-star"></i></span>
                                    <span><i className= "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">{this.props.item.description}</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">{this.props.item.price}</p>
                        </div>
                    </div>


                {/* <div className="product">
                    <img className="product-img" alt="Makeup"
                        src={this.props.item.img} />
                    <h2 className="title">{this.props.item.title}</h2>
                    <p className="price">{this.props.item.price}</p>
                    <p>{this.props.item.description}</p> 
                </div> */}
            </React.Fragment >
        )
    }
}

export default Products;