import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelloFriend } from './01-hello-first-app/HelloApp'
import { FirstApp } from './02-first-app';
import CounterApp from './03-counter-app';
import './styles/index.css'

// Here we are referencing the 'root' div in the public/index.html file
const divRoot = document.querySelector('#root');

// Here we're declaring to render our greet const inside our the divRoot element we found
const root = createRoot(divRoot);
root.render(
    <React.StrictMode>
        {/* <CounterApp counterValue={3}/> */}
        <FirstApp/>
    </React.StrictMode>
);