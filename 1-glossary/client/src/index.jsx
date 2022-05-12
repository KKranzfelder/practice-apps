import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import Glossary from "./Glossary.jsx";
import AddWord from "./AddWord.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(endpoint) {
    console.log('fetchData was triggered with endpoint:', endpoint);
    axios.get(endpoint)
      .then((res) => {
        console.log('response data within fetchData: ', res.data);
        this.setState({
          words: res.data,
        });
      });
  }

  componentDidMount() {
    this.fetchData('/entries');
  }



  render() {

    return (
      <div>
        <AddWord fetch={this.fetchData}/>
        <Glossary
        words={this.state.words}
        fetch={this.fetchData}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));