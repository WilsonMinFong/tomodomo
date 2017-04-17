# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- Bonus - User Profiles
  - `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Boards

- `GET /api/boards`
- `POST /api/boards`
- `GET /api/boards/:id`
- `PATCH /api/boards/:id`
- `DELETE /api/boards/:id`
- `GET /api/boards/:id/lists`
  - index of all lists for a board
- `GET /api/boards/:id/users`
  - index of all users with access to a board

### Lists

- `POST /api/lists`
- `PATCH /api/lists/:id`
- `DELETE /api/lists/:id`
- `GET /api/lists/:id/cards`
  - index of all cards for a list

### Cards

- `POST /api/cards`
- `PATCH /api/cards/:id`
- `DELETE /api/cards/:id`
- `GET /api/cards/:id/comments`
  - index of all comments for a card

### Comments

- `POST /api/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Board Shares

- `POST /api/board_shares/`
- `DELETE /api/board_shares/:id`
