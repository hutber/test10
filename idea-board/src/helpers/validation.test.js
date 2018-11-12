import { maxLength, requiredField } from './validation'

describe('Required Field', () => {
	it('a string to be returned when field is empty', () => {
	  expect(requiredField()).not.toBe(undefined);
	})
	it('undefined to be returned when a value is submitted', () => {
	  expect(requiredField('something')).toBe(undefined);
	})
});

describe('Max Length', () => {
  it('Returns error message when over X limit', () => {
    expect(maxLength(5)('123123123')).not.toBe(undefined)
    expect(maxLength(5)('123123123')).toEqual(expect.stringContaining('characters or less'))
  })
  it('Returns undefined if we are over X charaters', () => {
    expect(maxLength(5)('3232')).toBe(undefined)
  })
})
