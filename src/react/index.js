// Clear DevTool [HMR] messages:
import { setLogLevel } from 'webpack/hot/log';
setLogLevel('none');

// Sass:
import '../sass/main.scss';

// Modules:
import file from './file.js';

console.log('Hello Webpack!');