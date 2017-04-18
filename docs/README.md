# Tomodomo

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/pw2XI5p3/tomodomo

## Minimum Viable Product

Tomodomo is a web application inspired by Trello built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Boards
- [ ] Lists and Cards
- [ ] Sharing Boards
- [ ] Comments and Due Dates
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Boards Model, API, and components (1 day)

**Objective:** Boards can be created, read, edited and destroyed through
the API.

### Phase 3: Lists (1 day)

**Objective:** Lists belong to Boards, and can be created, read, edited and destroyed through
the API.

### Phase 4: Cards (2 days)

**Objective:** Cards belong to Lists, and can be created, read, edited and destroyed through the API.

### Phase 5: Sharing Boards (2 days)

**Objective:** Allow boards to be made public and shared with other users to edit.

### Phase 6: Comments and Due Dates (1 day)

**Objective:** Allow cards to be commented on and assigned a due date.

### Bonus Features (TBD)
- [ ] Board settings
- [ ] Hotkeys
- [ ] User profiles
- [ ] Changelogs for Boards
- [ ] Multiple sessions
