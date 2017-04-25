# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User seeds
User.destroy_all

User.create([
  {
    name: 'Guest User',
    email: 'guest@example.com',
    password: 'password'
  },
]);

# Board seeds
Board.destroy_all

User.first.boards.create([
  {
    name: 'Travel to Japan'
  },
  {
    name: 'Learn Japanese'
  },
  {
    name: 'Full-Stack Project - Tomodomo'
  }
]);

# List seeds
List.destroy_all

Board.find_by_name('Travel to Japan').lists.create([
  {
    name: 'Not Started'
  },
  {
    name: 'In Progress'
  },
  {
    name: 'Complete'
  }
]);

Board.find_by_name('Learn Japanese').lists.create([
  {
    name: 'Vocab to Review'
  },
  {
    name: 'Grammar to Review'
  },
  {
    name: 'Reviewed'
  }
]);

Board.find_by_name('Full-Stack Project - Tomodomo').lists.create([
  {
    name: 'Incomplete MVP Features'
  },
  {
    name: 'MVP Features to Review'
  },
  {
    name: 'Complete MVP Features'
  },
  {
    name: 'Issues'
  },
  {
    name: 'Completed Issues'
  }
]);

# Card seeds
Card.destroy_all

List.find_by_name('Not Started').cards.create([
  {
    name: 'Transportation',
    description: 'Airline? JR Rail Pass?'
  },
  {
    name: 'Lodging',
    description: 'How many days of ryokan vs hotels?'
  }
]);

List.find_by_name('In Progress').cards.create([
  {
    name: 'Time',
    description: 'When to go and how long?'
  }
])

List.find_by_name('Incomplete MVP Features').cards.create([
  {
    name: 'Sharing Boards'
  },
  {
    name: 'Comments and Due Dates'
  },
  {
    name: 'Production README'
  }
]);

List.find_by_name('MVP Features to Review').cards.create([
  {
    name: 'Cards'
  }
]);

List.find_by_name('Complete MVP Features').cards.create([
  {
    name: 'User authentication'
  },
  {
    name: 'Boards'
  },
  {
    name: 'Lists'
  }
]);
