import React, { Component } from 'react';
import './Post.jsx';

class Comment extends Component {
  render() {
    return (
      <div>
        <p>{this.props.body}</p>
      </div>
    );
  }
}


export default Comment;