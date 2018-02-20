//var you can reassign and redefine
var nameVar = 'Natalie';
nameVar = 'Michael';
var nameVar = 'Madison';
console.log('nameVar', nameVar);

//let you can reassign, NO redefine
let nameLet = 'Joe';
nameLet = 'Jen'
console.log('nameLet', nameLet);

//const you cannot redefine or reassign, its a f'n constant
const nameConst = 'Bob';
console.log('nameConst', nameConst);

//scoping
//var (let & const too) based are function scoped - available within the functions they are defined within
// let and const are block scoped - { bound to a code block }
