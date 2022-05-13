import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
    this.props.display(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.display(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
          type='text'
          value={this.state.value}
          placeholder='Search saved terms...'
          onChange={this.handleChange}
          />
        <input type='submit' value='Submit'/>
      </form>
    )
  }
}

export default Search;