import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import './index.css';

// Here we are referencing the 'root' div in the public/index.html file
const divRoot = document.querySelector('#root');

// Here we're declaring to render our greet const inside our the divRoot element we found
const root = createRoot(divRoot);
root.render(<CounterApp counterValue={3}/>);