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
