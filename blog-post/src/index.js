import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post.jsx';

const blog = {
  title: 'Dinosaurs are Awesome'
, authors: [
    'Stealthy Stegasaurus'
  , 'Tiny Trex'
  , 'Iguanadon'
  ]
, body: 'Yes they are'
, comments: ['first!', 'Great post', 'Hire this author now']
};

ReactDOM.render(
  <Post 
    title={blog.title}
    allAuthors={blog.authors}
    body={blog.body}
    comments={blog.comments}
  />
, document.getElementById('root')
);



