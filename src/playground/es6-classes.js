class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //template string
    return `Hi, I'm ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  //overrides or extends parent method
  getDescription() {
    let description = super.getDescription();

    if (this.major()) {
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Student("Natalie", 35, 'Engineering');
console.log(me);

const visitor = new Traveler();
console.log(visitor.getGreeting());
