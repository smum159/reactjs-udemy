import React from 'react'
import ReactDOM from 'react-dom'
// Thanks to the 'React' import we are able to create variables such as these without getting error
const greet = <h1>Hello Friend</h1>;
// Here we are referencing the 'root' div in the public/index.html file
const divRoot = document.querySelector('#root');

ReactDOM.render(greet,divRoot);