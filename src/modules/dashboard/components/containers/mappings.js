import { connect } from 'react-redux';
import { auth, fetchUserName } from 'modules/dashboard/actions/thunks/fetch-data';

import { DashBoardLifecycles } from './lifecycles';

const mapStateToProps = (state) => {
    return {
        login: state.auth.isLogin,
        correctUsername: state.auth.correctUsername
    };
};
const mapDispatchToProps = { auth, fetchUserName };
const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashBoardLifecycles);

export { DashboardContainer };
