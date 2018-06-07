import React from 'react';
// import ProductCard from '../OliveCards/oliveCards';
import axios from 'axios';
import Header from '../Header/header';
import { connect } from 'react-redux';

const stripePublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

class Cart extends React.Component {
  state = {
    haveToken: false,
    amount: 0
  };

  stripeForm = window.StripeCheckout.configure({
    key: stripePublicKey,
    token: this.onToken,
    amount: 'this.state.amount',
    currency: 'usd',
    locale: 'auto',
    zipcode: true,
    name: 'this.state.userName',
    description: 'Delicious olive oil, honey and Vinegar',
    image: ''
  });

  onToken = token => {
    token.card = void 0;

    const { amount } = this.state;
    axios.post('/api/payment', { token, amount }).then(res => {});
  };

  onClickPay = e => {
    e.preventDefault();
    this.stripeForm.open({});
  };

  render() {
    let buttonLable = this.state.haveToken ? 'Thank you!' : `Pay $${(this.state.amount / 100).toFixed(2)}`;
    let CartContent = this.props.UserCart.map(item => {
      <div>Cart Content {item.description}</div>;
    });
    return (
      <div>
        <Header CartItems={CartContent} />
        <section>
          Current Cart Items and actions
          <div> {CartContent} </div>
          <div>
            <button
              className={this.state.haveToken ? 'stripeButton-disabled' : 'stripeButton'}
              onClick={this.state.haveToken ? null : this.onClickPay}
            >
              Checkout
            </button>
          </div>
        </section>
        <section />
        <section />
      </div>
    );
  }

  componentWillUnmount() {
    this.stripeForm.close();
  }
}

function mapStateToProps(state) {
  return {
    UserCart: state.UserCart
  };
}

export default connect(mapStateToProps)(Cart);
