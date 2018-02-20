//es5 variable function
const square = function(num) {
  return num * num;
};

//es5 function declaration
function squareDeclaration(num) {
  return num * num;
};

console.log(square(8));

//es6 arrow function, always anonymous so you must assign it to a variable like we
//did here with const square2 = ... if you want to call it later
const square2 = (num) => {
  return num * num;
};

console.log(square2(4));

//expression syntax, can use when a single expression is returned
const square3 = (num) => num * num;

console.log(square3(5));

//create an arrow function to get a first name
const fullName = 'Natalie Wyll';

//verbose syntax
const getFirstName = (fullName) => {
  let firstName = fullName.split(' ')[0];
  return firstName;
};

console.log(getFirstName(fullName));

//expression syntax
const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getLastName(fullName));

//arguments object - not bound with arrow functions
const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

//this is not bound with arrow functions
//for an anonymous function there is no bound this value
//arrow functions use thier parents this
const user = {
  name: 'Natalie',
  cities: ["Austin", "Dallas", "Valencia"],
  placesLived: function () {   //es5 anonymous function declaration
    console.log(this.name);   //we have access to this
    // this does not work because the this in the inner function is undefined
    // but in ES6 arrow functions don't bind thier own this, they use thier parent's this
    // so it solves the problem, see below
    this.cities.forEach(function(city) {
      console.log(this.name + ' has lived in ' + city); // here this is null
    });
  }
};

const user2 = {
  name: 'Natalie',
  cities: ["Austin", "Dallas", "Valencia"],
  placesLived: function () {   //es5 anonymous function declaration
    console.log(this.name);   //we have access to this here
    //changed forEach inner funciton to an arrow function
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

//ES6 Method Definition syntax -  for defining methods on objects
const user3 = {
  name: 'Natalie',
  cities: ["Austin", "Dallas", "Valencia"],
  // es6 method definition syntax
  // placesLived*: function *() {  - remove everthing btwn * *
  // placesLived() { ==> placesLived: function () {
  // .map is the preffered array method over forEach
  placesLived() {
    // .map is the preffered array method over forEach
    // map gets called one time for each item in the array
    // forEach just lets you do something with the item,
    // map lets you transform each item getting a new array back
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user3.placesLived());

const multiplier = {
  numbers: [1, 3, 7],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((element) => element * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
console.log(multiplier.numbers);
