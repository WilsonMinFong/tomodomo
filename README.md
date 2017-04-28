# Tomodomo

[heroku]: https://tomodomo.herokuapp.com
[Tomodomo live][heroku]

Tomodomo is a full-stack web application inspired by Trello.  The app
gives users the ability to track information together with other users.
Information is structured in a natural hierarchy with boards containing
lists and lists containing cards.

Tomodomo's stack consists of a Ruby on Rails backend, a PostgreSQL
database, and React.js with Redux state management on the frontend.

## Features & Implementation

### Boards

The `boards` database table consists of columns for `id`, `name`,
`creator_id`, and `private`.  By default, boards are private.  Creators
of a board can change a board's visibility to public to allow public
viewers to see the board with the board's URL.  Board information is
protected by backend restrictions on the API routes along with
restrictions to frontend paths.

A separate table, `board_shares`, is used to implement board sharing.  
This table consists of columns for `id`, `board_id` and `user_id`.  The
latter two link entries in the `boards` and `users` table, respectively.
Shared users have the ability to view and edit information in shared
boards.  

### Lists & Cards

Lists are stored in a single database table consisting of columns for
`id`, `ord`, `name`, and `board_id`.  The `board_id` column links lists to
boards.

Additionally, cards are stored in another database table consisting of
columns for `id`, `ord`, `name`, `list_id`, `description`, `due_date`,
and `completed`.  `list_id` connects a card with a list.

One of the core aspects of lists and cards are their ability to be
dragged to be reordered.  Tomodomo accomplishes this by using
`react-dnd`.

## Features to Implement

Currently, Tomodomo implements the core features of Trello.  I plan to
continue adding features to the project to provide a better user
experience.

### Hotkeys

Hotkeys allow end users to escape the shackles of their mouse and
unlock better productivity.  I plan on using the Mousetrap library to
create a set of keyboard shortcuts.

### User Profiles & Board Settings

While not essential to the utility of the app, user and board
customization provide a better user experience.  Users will have the
ability to add a bio and profile picture to their profile.  The
background color or picture will be able to be customized.
