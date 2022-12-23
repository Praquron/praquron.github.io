class Author {
  constructor(firstName, lastName, yearBorn) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearBorn = yearBorn;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Create a new Author
const author = new Author('Douglas', 'Adams', 1952);
author.firstName = 'Doug';

// Prints "Doug Adams"
const fullName = author.getFullName();
console.log(fullName);
