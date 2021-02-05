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
                <div className="checkbox">
                    <div className="checkbox-filter" value={type} onChange={this.handlePriceDropdownSelect}>
                    <label class="container-check">All
                        <input type="radio" name="radio" value="default" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-check" >FACE MASK
                        <input type="radio" name="radio" value="FACE MASK" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-check">MOISTURISER
                        <input type="radio" name="radio" value="BODY MILK"/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-check">FACE SERUM
                            <input type="radio" name="radio" value="FACE SERUM"/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-check">FACE OIL
                            <input type="radio" name="radio" value="FACE OIL"/>
                        <span class="checkmark"></span>
                    </label>                    <label class="container-check">ACCESSORIES
                            <input type="radio" name="radio" value="ACCESSORIES"/>
                        <span class="checkmark"></span>
                    </label>
                    </div>

                    <div className="checkbox-filter" value={cost} onChange={this.handlePriceDropdownSelect}>
                    {/* <label class="container-check">All
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label> */}
                    <label class="container-check">$0 - $10
                        <input type="radio" name="radio"  value="low"/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-check">$11 - $15
                        <input type="radio" name="radio" value="medium"/>
                        <span class="checkmark"></span>
                    </label>
                    </div>
                </div>





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