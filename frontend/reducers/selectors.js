export const selectSortedLists = ({ lists }) => {
  const listsArr = Object.keys(lists).map((listId) => lists[listId]);

  return listsArr.sort((listA, listB) => listA.ord - listB.ord);
};

export const selectSortedListCards = ({ cards }, listId) => {
  const listCards = cards[listId];

  if (listCards === undefined) {
    return [];
  }

  const cardsArr = Object.keys(listCards).map((cardId) => listCards[cardId]);

  return cardsArr.sort((cardA, cardB) => cardA.ord - cardB.ord);
};
