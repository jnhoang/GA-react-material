import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './App';

const toDos = ['Buy ice cream', 'Eat ice cream', 'Suffer'];

ReactDOM.render(<MyList toDos={toDos} />, document.getElementById('root'));