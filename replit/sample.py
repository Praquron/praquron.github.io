class Author:
  def __init__(self, first_name, last_name, year_born):
    self.first_name = first_name
    self.last_name = last_name
    self.year_born = year_born

  def get_full_name(self):
    return self.first_name + " " + self.last_name

# Create a new Author
author = Author("Douglas", "Adams", 1952)
author.first_name = "Doug"

# Prints "Doug Adams"
fullName = author.get_full_name()
print(fullName)
