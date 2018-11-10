import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//Components
import Layout from '../../components/layout'
import App from '../../components/appBar'

class Index extends PureComponent {
    render() {
        return (
            <Layout>
	            <App />
            </Layout>
        );
    }
}

Index.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Index;
