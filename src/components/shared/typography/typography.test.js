import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './index';

describe('<Header />', () => {
	it('renders without crashing', () => {
		shallow(<Header copy='Idea Board' />)
	});
	it('We are an h2', () => {
		const h2 = mount(<Header copy='Idea Board' componentType='h2'/>);
		expect(h2.find('h2').exists()).toBeTruthy()
	});
	it('Creates a snapshot', () => {
		const HeaderInJson = renderer
			.create(<Header copy='Idea Board' />).toJSON();
		expect(HeaderInJson).toMatchSnapshot();
	})
})
