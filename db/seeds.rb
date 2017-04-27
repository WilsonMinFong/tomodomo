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
  {
    name: 'Hayao Miyazaki',
    email: 'hayao.miyazaki@ghibli.jp',
    password: 'animewasamistake'
  },
  {
    name: 'Makoto Shinkai',
    email: 'makoto.shinkai@comixwave.jp',
    password: 'kiminonawa'
  },
  {
    name: 'Mamoru Hosoda',
    email: 'mamoru.hosoda@chizu.jp',
    password: 'summerwars'
  },
  {
    name: 'Gen Urobuchi',
    email: 'urobutcher@noitamina.jp',
    password: 'suffering'
  },
  {
    name: 'Shinzo Abe',
    email: 'shinzo.abe@japan.go.jp',
    password: 'primeminister'
  }
])

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
    name: 'Full-Stack Project - Tomodomo',
    private: false
  }
])

User.find_by_name('Hayao Miyazaki').boards.create([
  {
    name: 'Dream Collab'
  }
])

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
])

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
])

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
])

Board.find_by_name('Dream Collab').lists.create([
  {
    name: 'To Decide'
  },
  {
    name: 'To Do'
  },
  {
    name: 'Completed'
  }
])

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
])

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
])

List.find_by_name('MVP Features to Review').cards.create([
  {
    name: 'Cards'
  }
])

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
])

List.find_by_name('To Decide').cards.create([
  {
    name: 'Characters',
    description: 'Gender? Age? Personality?'
  },
  {
    name: 'Music'
  },
  {
    name: 'Voice Actors',
    description: 'New vs established VAs?  Ideas?'
  }
])

List.find_by_name('To Do').cards.create([
  {
    name: 'Plot',
    description: 'Romance of two childhood friends who grew up in a fantasy world at birth.  Thrown into modern times, they tackle hardships together.'
  }
])

# BoardShare seeds
BoardShare.destroy_all

Board.find_by_name('Dream Collab').shared_users << User.find_by_name('Guest User')
Board.find_by_name('Dream Collab').shared_users << User.find_by_name('Makoto Shinkai')
Board.find_by_name('Dream Collab').shared_users << User.find_by_name('Mamoru Hosoda')
