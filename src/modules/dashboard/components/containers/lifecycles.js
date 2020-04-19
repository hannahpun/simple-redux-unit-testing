import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DashboardView } from '../presentations/';

class DashBoardLifecycles extends Component {
    static propTypes = {};
    state = {
        username: '',
        hasSubmit: false
    };
    componentDidMount () {
        const { fetchUserName } = this.props;
        fetchUserName();
    }
    handleChange (e) {
        this.setState({
            username: e.target.value,
            hasSubmit: false
        });
    }
    handleKeyDown (e) {
        if (e.key === 'Enter') {
            const { auth } = this.props;
            auth(this.state.username);
            this.setState({
                hasSubmit: true
            });
        }
    }
    render () {
        return (
            <DashboardView
                username={this.state.username}
                hasSubmit={this.state.hasSubmit}
                handleChange={(e) => this.handleChange(e)}
                handleKeyDown={(e) => this.handleKeyDown(e)}
                {...this.props}
            />
        );
    }
}

export { DashBoardLifecycles };
