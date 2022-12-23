#include <iostream>
#include <string>

using namespace std;

class Author {
public:
  string firstName;
  string lastName;
  int yearBorn;

  Author(string firstName, string lastName, int yearBorn) {
    this->firstName = firstName;
    this->lastName = lastName;
    this->yearBorn = yearBorn;
  }

  string getFullName() {
    return this->firstName + " " + this->lastName;
  }
};

int main(){
  // Create a new Author
  Author author = Author("Douglas", "Adams", 1952);
  author.firstName = "Doug";

  // Prints "Doug Adams"
  string fullName = author.getFullName();
  cout << fullName;

	return 0;
}
