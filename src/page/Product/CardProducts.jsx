import React, { Component } from 'react';

import ProductImg from '../../assets/img/product.png'


class CardProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card col card-product">
                    <div className="card-product-img">
                        <img src={ProductImg} alt="" />
                    </div>
                    <div className='card-body'>
                        <div className='card-product-name'>Coaster 506222-CO Loveseat</div>
                        <div className='card-product-price'>$765.99</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CardProducts;