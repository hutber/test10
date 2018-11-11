export const ADD_IDEA = 'ADD_IDEA';
export const REMOVE_IDEA = 'REMOVE_IDEA';

export function addNewIdea() {
  return {
    type: ADD_IDEA
  };
}


export function removeIdea(ideaId) {
  return {
    type: REMOVE_IDEA,
	  ideaId
  };
}



export function editIdea(ideaId) {
  return {
    type: REMOVE_IDEA,
	  ideaId
  };
}
