import React, { PureComponent } from 'react';

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

export default Index;
