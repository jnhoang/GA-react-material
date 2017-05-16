import React, { Component } from 'react';
import Comment from './Comment.jsx';
import Author from './Author.jsx';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: this.props.body
    , formInput: ''
    };
  }
  handleSubmit() {
    this.setState({
      body: this.state.formInput
    , formInput: ''
    });
  }
  handleFormInput(e) {
    this.setState({
      formInput: e.target.value
    });
  }
  render() {
    let authors = this.props.allAuthors.map( (author, idx) =>
      <Author author={author} key={idx} />
    );
    
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.body}</p>
        <h3>Written By</h3>
        {authors}
        <h3><u>Comments</u></h3>
        { this.props.comments.map( (comment, idx) => 
          <Comment key={idx} body={comment} />
        )}
        <input 
          type="text"
          value={this.state.formInput}
          onChange={ (e) => this.handleFormInput(e) }
        />
        <button 
          onClick={ (e) => this.handleSubmit() }
        >
          edit body
        </button>
      </div>
    );
  }
}

export default Post;