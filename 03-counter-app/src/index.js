import { FirstApp, FirstAppWrappedElements, FirstAppVariablesPrinting,
        FirstAppImplProps1, FirstAppImplProps2 } from './FirstApp';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Here we are referencing the 'root' div in the public/index.html file
const divRoot = document.querySelector('#root');

// Here we're declaring to render our greet const inside our the divRoot element we found
ReactDOM.render(
    [<FirstApp/>, 
    <FirstAppWrappedElements/>, 
    <FirstAppVariablesPrinting/>,
    <FirstAppImplProps1 greeting="Hi, I'm Props1 component"/>,
    <FirstAppImplProps2 greeting="Hello there!"/>],
    divRoot);
