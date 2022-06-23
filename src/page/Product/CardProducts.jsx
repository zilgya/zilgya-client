import React, { Component } from 'react';

import ProductImg from '../../assets/img/product.png'


class CardProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-product-img">
                        <img src={ProductImg} alt="" />
                    </div>
                    <div className='card-body'>
                        <p>Coaster 506222-CO Loveseat</p>
                        <p>$765.99</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CardProducts;