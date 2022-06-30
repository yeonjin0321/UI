'use strict';

let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

