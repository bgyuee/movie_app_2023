import React, { Component } from 'react'

export class cake extends Component {

  state = {
    price: 10000,
    disPrice: 0,
  }
  sale = () => {
    this.setState(current => (
      {disPrice:current.price *0.7}
    ));
  }

  render() {
    return (
      <div>
        <h1>현재가격: {this.state.price}</h1>
        <h1>할인된 가격: {this.state.disPrice}</h1>
        <button onClick={this.sale}>할인</button>
      </div>
    )
  }
}

export default cake


