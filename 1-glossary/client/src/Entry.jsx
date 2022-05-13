import React from "react";
import EditMode from "./EditMode.jsx";
import axios from "axios";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onEditClick(event) {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  onDeleteClick(event) {
    let word = this.props.word;
    axios.delete('/entry', {
      data: { word: word.word }
     })
    .then(() => this.props.fetch('/entries'))
    .catch(err => console.log(err));
  }

  render() {
    let fetch = this.props.fetch;
    let word = this.props.word;
    let editMode = this.state.editMode;
    let view;

    if (editMode) {
      view = <EditMode className='editMode' cancel={this.onEditClick} word={word} fetch={fetch}/>;
    } else {
      view = <>
      <p className='definition'>{word.definition}</p>
      <span>{word.createdAt}</span>
      <div className="entryOptions">
        <button value="Edit" onClick={this.onEditClick}>Edit Entry</button>
        <button value="Delete" onClick={this.onDeleteClick}>Delete Entry</button>
      </div>
      </>;
    }

    return(
      <div className="entry">
        <h3>{word.word}</h3>
        {view}
      </div>
    )
  }
}


export default Entry;