import { ADD_IDEA, REMOVE_IDEA, EDIT_IDEA } from '../../actions/ideas';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };

const emptyIdea = {
	title: '',
	description: '',
	createdDate: new Date().toLocaleDateString("en-UK", options),
	updatedDate: new Date().toLocaleDateString("en-UK", options)
};

export const initialState = {
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
		  console.info(copyOfIdeas);
      return {
        ...state,
	      items: [...copyOfIdeas]
      };
	  case EDIT_IDEA:
		  copyOfIdeas[action.ideaId] = {
		  ...state.items[action.ideaId],
			  [action.editType]: action.editText,
			  updatedDate: new Date().toLocaleDateString("en-UK", options)
		  };
      return {
        ...state,
	      items: copyOfIdeas
      };
    default:
      return state;
  }
}
