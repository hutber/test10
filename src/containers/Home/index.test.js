import React from 'react';
import { shallow } from 'enzyme';
import Index from './index';

describe('<Home /> Page Container', () => {
	it('renders without crashing', () => {
		shallow(<Index />);
	});
})
