import React, { Component } from 'react';

class Post extends Component {

  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>by {this.props.author}</h3>
        <p>{this.props.body}</p>
        <p>{this.props.comments[0]}</p>
      </div>
    );
  }
}

export default Post;