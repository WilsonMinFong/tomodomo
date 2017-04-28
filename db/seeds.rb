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
    name: 'George Martin',
    email: 'grrm@kingslanding.com',
    password: 'everyonedies'
  },
  {
    name: 'Shinzo Abe',
    email: 'shinzo.abe@japan.go.jp',
    password: 'primeminister'
  },
  {
    name: 'Zach Rivera',
    email: 'zrivera@gmail.com',
    password: 'otakutoostrong'
  },
  {
    name: 'Daniel Fulson',
    email: 'dfulson@appacademy.io',
    password: 'soothingvoice'
  }
])

# Board seeds
Board.destroy_all

User.first.boards.create([
  {
    name: 'Japan Vacation'
  },
  {
    name: 'Full-Stack Project - Tomodomo',
    private: false
  },
  {
    name: 'Personal and Work Goals'
  }
])

User.find_by_name('Hayao Miyazaki').boards.create([
  {
    name: 'Dream Collab'
  }
])

# List seeds
List.destroy_all

Board.find_by_name('Japan Vacation').lists.create([
  {
    name: 'To Do Before Trip'
  },
  {
    name: 'Done'
  },
  {
    name: 'To Eat And Drink'
  },
  {
    name: 'Places to See'
  }
])

Board.find_by_name('Personal and Work Goals').lists.create([
  {
    name: 'Personal'
  },
  {
    name: 'Work'
  },
  {
    name: 'Achieved!'
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

List.find_by_name('Personal').cards.create([
  {
    name: 'Cook one new recipe a week'
  },
  {
    name: 'Sleep at least 7 hours a night'
  },
  {
    name: 'Reconnect with college buddies'
  },
  {
    name: '100% complete Zelda: BoTW'
  }
]);

List.find_by_name('Work').cards.create([
  {
    name: 'Add checklists feature to cards'
  },
  {
    name: 'Refactor popup component'
  },
  {
    name: 'Prepare presentation for staff meeting'
  }
]);

List.find_by_name('Achieved!').cards.create([
  {
    name: 'Start my software development career'
  }
]);

List.find_by_name('To Do Before Trip').cards.create([
  {
    name: 'Book airline tickets',
    description: 'JFK to Narita International Airport (NRT)'
  },
  {
    name: 'Buy JR Rail Pass',
    description: 'Get the two week pass'
  },
  {
    name: 'Book hotel',
    description: 'Mostly regular hotels, but consider traditional ryokan for a night or two'
  }
])

List.find_by_name('Done').cards.create([
  {
    name: 'Decide on dates',
    description: 'When to go and how long?'
  }
])

List.find_by_name('To Eat And Drink').cards.create([
  {
    name: 'Conveyor belt sushi'
  },
  {
    name: 'Curry rice'
  },
  {
    name: 'Yakitori'
  },
  {
    name: 'Authentic ramen',
    description: 'Not cup ramen'
  },
  {
    name: 'Japanese sweet potato'
  }
])

List.find_by_name('Places to See').cards.create([
  {
    name: 'Ghibli Museum'
  },
  {
    name: 'Mount Fuji'
  },
  {
    name: 'Akihabara'
  },
  {
    name: 'Nara',
    description: 'Deer on the streets!!!'
  }
])

List.find_by_name('Incomplete MVP Features').cards.create([
  {
    name: 'Comments and Due Dates'
  },
  {
    name: 'Production README'
  }
])

List.find_by_name('MVP Features to Review').cards.create([
  {
    name: 'Sharing Boards'
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
  },
  {
    name: 'Cards'
  }
])

List.find_by_name('Issues').cards.create([
  {
    name: 'Add confirmations before deleting anything'
  },
])

List.find_by_name('Completed Issues').cards.create([
  {
    name: 'Add hover styling for links'
  },
  {
    name: 'Boards are not visible when the window gets too narrow'
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
Board.find_by_name('Japan Vacation').shared_users << User.find_by_name('Zach Rivera')
Board.find_by_name('Full-Stack Project - Tomodomo').shared_users << User.find_by_name('Daniel Fulson')


# Comment seeds
Comment.destroy_all

guest_id = User.find_by_name('Guest User').id
zach_id = User.find_by_name('Zach Rivera').id

Card.find_by_name('Decide on dates').comments.create([
  {
    author_id: guest_id,
    body: 'I hear the cherry blossoms are beautiful during the spring'
  },
  {
    author_id: zach_id,
    body: 'But airline tickets should be cheaper during winter/fall'
  },
  {
    author_id: guest_id,
    body: 'In that case, let\'s do fall.  How about the first two weeks of December?'
  },
  {
    author_id: zach_id,
    body: 'Let\'s do that!'
  }
])

Card.find_by_name('Book airline tickets').comments.create([
  {
    author_id: zach_id,
    body: 'Does airline matter?'
  },
  {
    author_id: guest_id,
    body: 'Let\'s find the cheapest.'
  }
])
