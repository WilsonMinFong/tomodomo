export const RECEIVE_POPOVER = 'RECEIVE_POPOVER';
export const REMOVE_ALL_POPOVERS = 'REMOVE_ALL_POPOVERS';

export const receivePopover = (popover) => {
  return {
    type: RECEIVE_POPOVER,
    popover
  };
};

export const removeAllPopovers = () => {
  return {
    type: REMOVE_ALL_POPOVERS
  };
};
