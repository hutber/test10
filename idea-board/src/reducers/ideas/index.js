import { ADD_IDEA } from '../../actions/ideas';

const emptyIdea = {
	title: '',
	description: '',
	createdDate: new Date(),
	updatedDate: new Date()
};

const initialState = {
  items: [emptyIdea]
};

export default function(state = initialState, action) {
  switch (action.type) {
	  case ADD_IDEA:
      return {
        ...state,
	      items: [...state.items, emptyIdea]
      };
    default:
      return state;
  }
}
