import React, { Component } from 'react';
import Comment from './Comment.jsx';
import Author from './Author.jsx';
class Post extends Component {

  render() {
    let authors = this.props.allAuthors.map( (author, idx) =>
      <Author author={author} key={idx} />
    );
    
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
        <h3>Written By</h3>
        {authors}
        <h3><u>Comments</u></h3>
        { this.props.comments.map( (comment, idx) => 
          <Comment key={idx} body={comment} />
        )}
      </div>
    );
  }
}

export default Post;