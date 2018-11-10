import { CLOSE_NOTIFICATION, SET_NOTIFICATION } from '../../actions/ideas';

const initialState = {
  open: false,
  messageType: '',
  message: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        open: action.open,
        messageType: action.messageType,
        message: action.message
      };
    default:
      return state;
  }
}
