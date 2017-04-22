# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
name            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
creator_id  | integer   | not null, foreign key (references users), indexed
name        | string    | not null
private     | boolean   | default: true

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed
name        | string    | not null
order       | integer   | not null

## cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
list_id     | integer   | not null, foreign key (references lists), indexed
name        | string    | not null
description | string    |
due_date    | datetime  |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | string    | not null, foreign key (references users), indexed
card_id     | integer   | not null, foreign key (references cards), indexed
body        | string    | not null

## board_shares
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed, unique [user_id]
user_id     | integer   | not null, foreign key (references users), indexed
