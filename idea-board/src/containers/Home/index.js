import React, { PureComponent } from 'react';
import { Header } from '../../components/shared';
import Layout from '../../components/layout'

export default class Index extends PureComponent {
    render() {
        return (
            <Layout>
	            <Header copy='Idea Board' />
            </Layout>
        );
    }
}
