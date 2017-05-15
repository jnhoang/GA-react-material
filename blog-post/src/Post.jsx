import React, { Component } from 'react';
import Comment from './Comment.jsx';

class Post extends Component {

  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>by {this.props.author}</h3>
        <p>{this.props.body}</p>
        <h3><u>Comments</u></h3>
        { this.props.comments.map( (comment, idx) => 
            <Comment key={idx} body={comment} />
        )}
      </div>
    );
  }
}

export default Post;