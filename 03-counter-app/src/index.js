import React from 'react'
import ReactDOM from 'react-dom'
// Thanks to the 'React' import we are able to create variables such as these without getting error
const greet = <h1>Hello Friend</h1>;
// Here we are referencing the 'root' div in the public/index.html file
const divRoot = document.querySelector('#root');

// Here we're declaring to render our greet const inside our the divRoot element we found
ReactDOM.render(greet,divRoot);
