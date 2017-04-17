```js
{
  currentUser: {
    id: 1,
    username: "me"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  boards: {
    1: {
      name: "Japan Trip",
      private: false,
      creator_id: 1
    }
  },
  boardUsers: {
    1: {
      username: "me"
    },
    2: {
      username: "friend",
      share_id: 1
    }
  },
  lists: {
    1: {
      title: "To Do"
    }
  },
  cards: {
    1: {
      title: "Buy plane tickets",
      list_id: 1
    }
  },
  cardDetail: {
    title: "Buy plane tickets",
    description: "We need to buy plane tickets to get there.",
    due_date: "Sun Apr 16 2017 16:32:13 GMT-0400 (EDT)"
  },
  comments: {
    1: {
      body: "Which airline?",
      author_id: 1
      },
    2: {
      body: "The cheapest, probably...",
      author_id: 2
    }
  }
}
```
