export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

export function setNavigationMessage(details) {
  return {
    type: SET_NOTIFICATION,
    open: true,
    messageType: details.messageType,
    message: details.message
  };
}

export function closeNavigation() {
  return {
    type: CLOSE_NOTIFICATION,
    open: false,
    messageType: '',
    message: ''
  };
}
