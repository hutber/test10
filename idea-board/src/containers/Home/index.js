import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

//Components
import Layout from '../../components/layout'
import App from '../../components/appBar'
import IdeaContainer from '../../components/ideas/container'

class Index extends PureComponent {
    render() {
        return (
            <Layout>
	            <App />
	            <IdeaContainer />
            </Layout>
        );
    }
}

Index.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Index;
