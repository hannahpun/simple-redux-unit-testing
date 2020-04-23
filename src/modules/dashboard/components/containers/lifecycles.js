import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DashboardView } from '../presentations/';

class DashBoardLifecycles extends Component {
    static propTypes = {
        // Redux data
        login: PropTypes.bool,
        correctUsername: PropTypes.string,

        // Redux dispatches
        auth: PropTypes.func,
        fetchUserName: PropTypes.func.isRequired
    };

    componentDidMount () {
        const { fetchUserName } = this.props;
        fetchUserName();
    }

    render () {
        return <DashboardView {...this.props} />;
    }
}

export { DashBoardLifecycles };
