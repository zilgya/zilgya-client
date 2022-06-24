import axios from "axios";
import React, { Component } from "react";

class CardProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      image: null,
    };
  }

  async componentDidMount() {
    try {
      const result = await axios.get(`${process.env.REACT_APP_HOST_API}/product/images/${this.state.id}`);
      this.setState({
        image: result.data.data[0].url,
      });
    } catch (error) {
      this.setState({
        error: error.response ? error.response.data.err : error.message,
      });
    }
  }
  render() {
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });
    return (
      <React.Fragment>
        <div className="card col card-product">
          <div className="card-product-img">
            <img src={this.state.image} alt="" />
          </div>
          <div className="card-body">
            <div className="card-product-name">{this.state.name}</div>
            <div className="card-product-price">IDR {formatter.format(this.state.price).split("Rp")[1]}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardProducts;
