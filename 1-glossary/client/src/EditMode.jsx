import React from 'react';
import axios from 'axios';

class EditMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curDefinition: this.props.word.definition
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(event) {
    let word=this.props.word;
    event.preventDefault();
    axios.put('/entry',
    {
      word: word.word,
      createdAt: word.createdAt,
      definition: this.state.curDefinition
    })
    .then((res) => {
    console.log('response after put request: ', res);
    this.props.cancel();
    this.props.fetch('/entries');
  })
    .catch((err) => console.log(err));
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      curDefinition: event.target.value
    });
  }

  handleCancel(event) {
      this.props.cancel();
  }

  render() {
    return (
      < div className='EditMode' >
        < form onSubmit={this.handleSubmit} >
          < label >
            Edit definition:
            < textarea value={this.state.curDefinition}
            onChange={this.handleChange} />
          </ label >
          < input type='submit' value='Submit' />
        </ form >
        <button value='Cancel' onClick={this.handleCancel}>Cancel</button>
      </ div >
    )
  }
}

export default EditMode;