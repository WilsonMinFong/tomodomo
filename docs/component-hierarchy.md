## Component Hierarchy

*Legend:*  
- () - represents props passed into component
- [] - represents state kept track of by component

**AuthFormContainer**
  - AuthForm - (action)

**App**
  - HeaderContainer

**HeaderContainer**
  - Header - (currentUser, logout) - [openBoardMenu, openCreateMenu, openUserMenu]
    - BoardsMenu - (open)
      - BoardsIndexContainer
    - CreateMenu - (open) - [openItem]
      - CreateMenuItem
        - BoardFormContainer
    - UserMenu - (currentUser, logout, open)

**BoardsIndexContainer**
  - BoardsIndex - (boards, fetchBoards) - [openForm]
    - BoardIndexItem - (board)
    - BoardFormContainer - (open)

**BoardFormContainer**
  - BoardForm - (open, board, createBoard, updateForm) - [name, private]
    - VisibilityIndex - (private, setPrivacy)
      - VisibilityIndexItem - (checked)

**BoardContainer**
  - Board - (board, updateBoard) - [name, private, openMenu]
    - VisibilityIndex - (private, setPrivacy)
      - VisibilityIndexItem
    - BoardMenuContainer - (open)
    - ListIndexContainer

**BoardMenuContainer**
  - BoardMenu - (fetchSharedUsers, deleteBoard, createShare, open) - [openShareForm]
    - UsersIndex - (fetchSharedUsers)
      - UsersIndexItem - (user)
    - ShareForm - (createShare) - [searchString, matchedUsers]

**ListIndexContainer**
  - ListIndex - (lists, addCard, fetchLists, updateList, createCard) - [openListForm]
    - List - (list, updateList)
      - CardForm - (createCard) - [name]
      - CardIndexContainer

**CardIndexContainer**
  - CardIndex - (cards, fetchCards)
    - CardIndexItem - (card)

**CardContainer**
  - Card - (card, comments, fetchCard, updateCard, deleteCard, fetchComments, createComment) - [name, description, dueDate]
    - CommentForm - (createComment) - [body]
    - CommentList - (comments)
      - CommentListItem - (comment)

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/" | "App", "BoardsIndexContainer" as IndexRoute |
| "/board/:boardId" | "BoardContainer" |
| "/card/:cardId" | "CardContainer" |
