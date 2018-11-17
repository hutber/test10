import React from 'react';
import renderer from 'react-test-renderer';
import Component from './index';

describe('<Layout />', () => {
	it('Creates a snapshot', () => {
		const HeaderInJson = renderer
			.create(<Component />).toJSON();
		expect(HeaderInJson).toMatchSnapshot();
	})
})
