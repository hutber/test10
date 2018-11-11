import { ADD_IDEA, REMOVE_IDEA, EDIT_IDEA } from '../../actions/ideas';

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
	const copyOfIdeas = state.items;
  switch (action.type) {
	  case ADD_IDEA:
      return {
        ...state,
	      items: [...state.items, emptyIdea]
      };
	  case REMOVE_IDEA:
		  copyOfIdeas.splice(action.ideaId, 1);
      return {
        ...state,
	      items: copyOfIdeas
      };
	  case EDIT_IDEA:
		  copyOfIdeas[action.ideaId] = {
		  ...state.items[action.ideaId],
			  title: action.editText,
			  updatedDate: new Date()
		  };
      return {
        ...state,
	      items: copyOfIdeas
      };
    default:
      return state;
  }
}
