import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './index';

const ShallowHeader = shallow(<Header copy='Idea Board' />);
describe('<Header />', () => {
	it('renders without crashing', () => {
		ShallowHeader
	});
	it('We correctly output copy', () => {

	});
	it('Creates a snapshot', () => {
		const HeaderInJson = renderer
			.create(<Header copy='Idea Board' />).toJSON();
		expect(HeaderInJson).toMatchSnapshot();
	})
})
