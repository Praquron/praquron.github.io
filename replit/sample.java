import java.io.*;

class Author {
  public String firstName;
  public String lastName;
  public int yearBorn;

  public Author(String firstName, String lastName, int yearBorn) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearBorn = yearBorn;
  }

  public String getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Example {
  public static void main(String[] args) {
    // Create a new Author
    Author author = new Author("Douglas", "Adams", 1952);
    author.firstName = "Doug";

    // Prints "Doug Adams"
    String fullName = author.getFullName();
    System.out.println(fullName);
  }
}
