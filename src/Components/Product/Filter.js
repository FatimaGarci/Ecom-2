import React from 'react';
import './Product.css'
import items from './Products.json';
import Products from './Product.js';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "default",
            cost: "default"
        }
    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            type: event.target.value
        })
    }


    render() {
        const { type, cost } = this.state;
        return (
            <React.Fragment>
                <div className="form-container">
                    <div className="gridfilter">
                        <label className="filters">
                            Type:
                         </label>
                        <select id="filterSelect" value={type} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="FACE MASK">FACE MASK</option>
                            <option value="BODY MILK">BODY MILK</option>
                            <option value="FACE SERUM">FACE SERUM</option>
                            <option value="FACE OIL">FACE OIL</option>
                            <option value="ACCESSORIES">ACCESSORIES</option>
                        </select>
                    </div>

                    <div>
                        <label className="filters">
                            Price:
                         </label>
                        <select id="priceSelect" value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="low">$0 - $10</option>
                            <option value="medium">$10 - $15</option>
                        </select>
                    </div>
                </div>
{/* 
                <section class="sticky-Img">
                    <img src="./img/Unique-UB.png" alt="Avatar" />
                </section> */}

                <section id="container" >
                    <div className="filter">
                        {items.items.map(item => {
                            if (type === 'default' && cost === 'default') {
                                return <Products item={item} />
                            } else if (type === item.type && cost === item.cost) {
                                return <Products item={item} />
                            } else if (type === item.type || cost === item.cost) {
                                return <Products item={item} />
                            }
                        })}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


export default Filter;