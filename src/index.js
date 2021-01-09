// Clear DevTool [HMR] messages:
import { setLogLevel } from 'webpack/hot/log';
setLogLevel('error');

// Sass:
import './sass/main.scss';

//React:
import React from 'react';
import ReactDOM from 'react-dom';

// App:
import App from './react/App.js';


ReactDOM.render(
    <App />,
    document.getElementById('root')
)




