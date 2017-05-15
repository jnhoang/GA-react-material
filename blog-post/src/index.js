import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.jsx';

const blog = {
  title: 'Dinosaurs are Awesome'
, author: 'Stealthy Stegasaurus'
, body: 'Yes they are'
, comments: ['first!', 'Great post', 'Hire this author now']
};

ReactDOM.render(
  <Post 
    title={blog.title}
    author={blog.author}
    body={blog.body}
    comments={blog.comments}
  />
, document.getElementById('root')
);



