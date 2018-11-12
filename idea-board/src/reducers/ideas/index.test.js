import reducer, { initialState } from './index';
import * as actions from '../../actions/ideas'

describe('Ideas Reducer', () => {
  it('Should return the inital state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('Should handle ADD_IDEA', () => {
	  expect(actions.addNewIdea()).toEqual()
  });
  it('Should handle REMOVE_IDEA', () => {

  });
  it('Should handle EDIT_IDEA', () => {

  })
})
