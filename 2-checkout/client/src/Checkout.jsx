import React from 'react';

var Checkout = ({loggedIn, user, togglePage}) => {
  let greeting = '';
  if (loggedIn === true) {
    greeting = <h3>Hello {user.name}! Complete your purchase?</h3>;
  } else {
    greeting = <h3>Welcome! Sign up and checkout?</h3>;
  }

  var checkOutClicked = (event) => {
    event.preventDefault();
    togglePage('Checkout', 'UserForm');
  };

  return (
    <>
    {greeting}
    <button value='checkout' onClick={checkOutClicked}>Checkout</button>
    </>
  )
};



export default Checkout;