// Clear DevTool [HMR] messages:
import { setLogLevel } from 'webpack/hot/log';
setLogLevel('error');

// Sass:
import '../sass/main.scss';

// Modules:
import file from './file.js';

const name = 'Webpack';
const word = `Hello ${name}`;

console.log(word);

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const dima = new Person('Dima', 27);

dima.sayHi();

