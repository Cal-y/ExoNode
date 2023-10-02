const myInformation = require('./information');
const cowsay = require('cowsay');

console.log("Name:", myInformation.name);
console.log("Campus:", myInformation.campus);

console.log(cowsay.say({
    text: "Hello, Je m'appelle Caly et je suis du campus remote",
    e: "oO",
    t: "U"
}));