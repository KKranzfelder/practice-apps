import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Checkout from './Checkout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showCheckout: true,
      showUserForm: false,
      showAddressForm: false,
      showCardForm: false,
      showConfirmation: false,
      userInfo: {},
      addressInfo: {},
      cardInfo: {}
    }
    this.togglePage = this.togglePage.bind(this);
  }

  componentDidMount() {
    axios.get('/user')
      .then(res =>
        console.log(res.data),
      )
      .catch(err => console.log(err));
  }

  togglePage(toggleOff, toggleOn) {
    console.log(`toggled ${toggleOff} off and ${toggleOn} on.`);
  }


  render() {
    return (
      <div>
        <Checkout
        loggedIn={this.state.isLoggedIn}
        user={this.state.userInfo}
        togglePage={this.togglePage}
        />
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
      </div>
      //document.getElementById("root")
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));