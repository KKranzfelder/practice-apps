import React from "react";
import axios from "axios";

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWord: '',
      newDefinition: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewWord = this.handleNewWord.bind(this);
    this.handleNewDef = this.handleNewDef.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let date = Date();
    (console.log(date))
    axios.post('/entry', {
      word: this.state.newWord,
      definition: this.state.newDefinition,
      createdAt: date
    })
    .then(() => this.props.fetch('/entries'))
    .catch(err => console.log(err));
  }

  handleNewWord(event) {
    event.preventDefault();
    this.setState({
      newWord: event.target.value,
      newDefinition: this.state.newDefinition
    });
  }

  handleNewDef(event) {
    event.preventDefault();
    this.setState({
      newWord: this.state.newWord,
      newDefinition: event.target.value
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      newWord: '',
      newDefinition: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='submitWord'>
        <label>
          Add new word:
          <input
            type='text'
            name='Enter new word'
            value={this.state.newWord}
            placeholder='Enter new word...'
            onChange={this.handleNewWord}
          />
        </label>
        <label>
          Add definition:
          <textarea
            value={this.state.newDefinition}
            onChange={this.handleNewDef}
            placeholder='Enter new definition...'
          />
        </label>
        <input type='submit' value='Submit' />
        <button
        value='Cancel'
        onClick={this.handleCancel}
        className='cancelAdd'>
          Cancel
        </button>
      </form>
    )
  }
}

export default AddWord;