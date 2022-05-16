import React from 'react';

var Checkout = ({loggedIn, User}) {
  var greeting;
  if (loggedIn) {
    greeting = <h3>Hello {User.name}! Complete your purchase?</h2>
  } else {
    greeting = <h3>Welcome! Sign up and checkout?</h3>
  }

  return (
    <>
    {greeting}
    <button value='checkout' onClick={}>Checkout</button>
    </>
  )
};



export default Checkout;