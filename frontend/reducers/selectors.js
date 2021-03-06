export const selectSortedLists = ({ lists }) => {
  const listsArr = Object.keys(lists).map((listId) => lists[listId]);

  return listsArr.sort((listA, listB) => listA.ord - listB.ord);
};

export const selectSortedListCards = ({ cards }, listId) => {
  const cardsArr = Object.keys(cards).map((cardId) => cards[cardId]);

  const listCards = cardsArr.filter(
    (card) => card.list_id === listId
  );

  return listCards.sort((cardA, cardB) => cardA.ord - cardB.ord);
};

export const selectCommentsSortedByCreatedDate = ({ comments }) => {
  const commentsArr = Object.keys(comments).map(
    (commentId) => comments[commentId]
  );

  return commentsArr.sort(
    (a, b) => new Date(a.created_at) < new Date(b.created_at)
  );
};
