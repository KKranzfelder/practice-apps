import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showHome: true,
      showCheckout: false,
      showUserForm: false,
      showAddressForm: false,
      showCardForm: false,
      UserInfo: {}
    }
    this.togglePage = this.togglePage.bind(this);
  }

  componentDidMount() {
    axios.get('/user')
      .then(res =>
        this.setState({isLoggedIn: true}),
        this.setState({UserInfo: res.data}))
      .catch(err => console.log(err));
  }

  togglePage(toggleOff, toggleOn) {
    console.log(`toggled ${toggleOff} off and ${toggleOn} on.`);
  }


  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
      </div>
      //document.getElementById("root")
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));