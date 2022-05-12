import React from "react";

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
    let date = Date();
    (console.log(date))
    axios.post('/entry', {
      word: this.state.newWord,
      definition: this.state.newDefinition,
      createdAt: date
    })
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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='addWord'>
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
          />
        </label>
        <input type='submit' value='Submit' />
        <button value='Cancel' onClick={this.handleCancel}>
          Cancel
        </button>
      </form>
    )
  }
}

export default AddWord;