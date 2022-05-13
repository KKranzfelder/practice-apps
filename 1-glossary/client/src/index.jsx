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
      displayedWords: [],
      hasMatchingTerms: true
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
          displayedWords: res.data,
          hasMatchingTerms: true
        });
      });
  }

  setDisplay(input) {
    console.log('setDisplay was Triggered');
    let matchedWords = [];
    this.state.words.forEach((word) => {
      if (word.word.includes(input)) {
        matchedWords.push(word);
      }
    });
    if (matchedWords.length > 0) {
      console.log(matchedWords, input);
      this.setState({
        words: this.state.words,
        displayedWords: matchedWords,
        hasMatchingTerms: true
      });
    } else {
      this.setState({
        words: this.state.words,
        displayedWords: this.state.words,
        hasMatchingTerms: false
      });
    }
  }

  componentDidMount() {
    this.fetchData('/entries');
  }



  render() {
    let view;
    let hasMatchingTerms = this.state.hasMatchingTerms;
    if (hasMatchingTerms) {
      view = <Glossary
        words={this.state.displayedWords}
        fetch={this.fetchData} />;
    } else {
      console.log('no matching terms');
      view = <h3 className='noTerms'>No matching terms found.</h3>;
    }

    return (
      <div className='app'>
        <div className='header'>
          <div className='title'>
          <h1>HiDef</h1>
          </div>
          <div className='search'>
            <Search words={this.state.words} display={this.setDisplay} />
          </div>
        </div>
        <div className='body'>
          <div className='addWord'>
            <AddWord fetch={this.fetchData} />
          </div>
          <div className='terms'>
            {view}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));