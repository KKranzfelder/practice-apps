import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import Glossary from "./Glossary.jsx";
import AddWord from "./AddWord.jsx";
import Search from "./Search.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      displayedWords:[]
    }
    this.fetchData = this.fetchData.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  fetchData(endpoint) {
    console.log('fetchData was triggered with endpoint:', endpoint);
    axios.get(endpoint)
      .then((res) => {
        console.log('response data within fetchData: ', res.data);
        this.setState({
          words: res.data,
          displayedWords: res.data
        });
      });
  }

  setDisplay(input) {
    let matchedWords = [];
    this.state.words.forEach((word) => {
      if(word.word.includes(input)) {
        matchedWords.push(word);
      }
    })
    this.setState({
      words: this.state.words,
      displayedWord: matchedWords
    });
  }

  componentDidMount() {
    this.fetchData('/entries');
  }



  render() {

    return (
      <div>
        <AddWord fetch={this.fetchData}/>
        <Search words={this.state.words} display={this.setDisplay}/>
        <Glossary
        words={this.state.words}
        fetch={this.fetchData}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));