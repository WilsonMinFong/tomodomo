# Tomodomo

[kanban]: https://en.wikipedia.org/wiki/Kanban_(development)

Tomodomo is a full-stack web application inspired by Trello.  The app
utilizes the [kanban framework][kanban] to give users the ability to
manage projects together with other users.  In the kanban framework,
boards (projects) contain lists (task lists), and lists contain cards
(tasks).

[heroku]: https://www.mytomodomo.com
Visit [Tomodomo][heroku] to create a board.

Tomodomo stack:
* Backend: Ruby on Rails
* Database: PostgreSQL
* Frontend: React.js with Redux state management

## Features

* Create, read, update, and delete boards, lists, and cards
* Reorder lists and cards within a board
* Share boards with other users
* Provide a read-only board view for non-authenticated users
* Add comments to cards
* Give cards a due date and completion status

## Technical Highlights / Implementation

### Board Sharing and Read-Only Access

Tomodomo implements board sharing using a `board_shares` database table.
The `board_shares` table contains columns for `id`, `board_id`, and
`user_id`.  `board_id` and `user_id` are foreign keys pointing to
rows in the `boards` and `users` tables, respectively.  Backend routes
to read, update, and destroy resources within a board validate that the
current user is either the board creator or has a board share before
generating the response.  Users redirect to their homepage when
attempting to access resources they don't have access to.

The `private` column of the `boards` database table determines whether
or not a board and its nested resources are viewable by unauthenticated
users.  Backend routes to read resources within a board check this
column before validating current user access to a board.  Read-only
users are presented with a view without any edit functionality.

### Orderable Lists and Cards

Using the kanban framework, the core aspect of lists and cards is their
ability to be reordered.  Lists can be reordered within a board.  Cards
can be reordered within their list and moved between different lists.  

Both `lists` and `cards` database tables contain an `ord` column,
indicating its order in its containing item.  The frontend uses `ord`
to determine what order to render lists and cards in.

Users drag and drop to reorder items.  Tomodomo implements drag and drop
using the `react-dnd` library.  The table below identifies the React
components involved in the drag and drop and their roles within
`react-dnd`.

Item        | `DragSource`    | `DragTarget`
----------- | --------------- | ---------------------------
lists       | `List`          | `ListIndexItem`
cards       | `CardIndexItem` | `CardIndexItem`, `CardIndex`

## Features to Implement

- [ ] Hotkeys (using Mousetrap library)
- [ ] Board settings
- [ ] User profiles
- [ ] Changelogs
- [ ] Multiple sessions
