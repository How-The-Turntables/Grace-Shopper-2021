import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = (props) => {
  const [product, setProduct] = useState({
    name: 'Albums',
    price: 10, // fix price
    productBy: 'How the TurnTables',
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    //stripe will require https
    return fetch(`http://localhost:3000/payment`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        const { status } = response;
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Checkout</h1>
      <StripeCheckout
        stripeKey="pk_test_51InBnVLzJ6Ooq8ftXn86XLMdGlaDVmC4IaC9DW0nMNAtT1FEenak4ZzryEE9WgTtDp3Zz9TH11pCITeDNAXkWZjF00hFlaBdr2"
        // token fires a method
        token={makePayment}
        name="Buy Album"
        amount={product.price * 100}
      >
        <button className="btn-large blue">Pay with Stripe</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
