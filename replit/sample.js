class Author {
  constructor(firstName, lastName, yearBorn, foreigner) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearBorn = yearBorn;
    this.foreigner = foreigner;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Create a new Author
const author = new Author('Douglas', 'Adams', 1952, false);
author.firstName = 'Doug';

// Prints "Doug Adams"
function printsName() {
  const fullName = author.getFullName();
  console.log(fullName);
}
