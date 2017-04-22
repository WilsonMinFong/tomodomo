export const selectSortedLists = ({ lists }) => {
  const listsArr = Object.keys(lists).map((listId) => lists[listId]);

  return listsArr.sort((listA, listB) => listA.ord - listB.ord);
};
