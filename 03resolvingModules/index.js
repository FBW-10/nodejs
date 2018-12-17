const {sub, sum} = require("./helpers")

const unicorn = require("unicorn-rider")
console.log('unicorn', unicorn);

console.log('sub(8, 3)', sub(8, 3));
console.log('sum(10, 4)', sum(10, 4));


const {mult, div} = require('./otherhelpers')
console.log(`div(5,4)`, div(5,4));
console.log('mult(5,3)', mult(5,3));

