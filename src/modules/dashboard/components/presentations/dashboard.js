import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss';
import { render } from '@testing-library/react';

class DashboardView extends Component {
    state = {
        username: '',
        hasSubmit: false
    };

    handleChange = (e) => {
        this.setState({ username: e.target.value, hasSubmit: false });
    };
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const { auth } = this.props;
            auth(this.state.username);
            this.setState({ hasSubmit: true });
        }
    };
    render () {
        const { login } = this.props;

        return (
            <div data-test='dashboard' className='dashboard'>
                {login ? (
                    <h1 data-test='welcome-text'>Howdy, {this.state.username} !</h1>
                ) : (
                    <div data-test='form-group' className={`form-group ${this.state.hasSubmit ? 'invalid' : ''}`}>
                        <label htmlFor='username'>Please Enter Your Username</label>
                        <input
                            data-test='input'
                            className='form-control'
                            id='username'
                            type='text'
                            value={this.state.username}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />
                        <small data-test='form-text' className='form-text text-muted'>
                            Wrong Username
                        </small>
                    </div>
                )}
            </div>
        );
    }
}

DashboardView.propTypes = {
    login: PropTypes.bool.isRequired,
    auth: PropTypes.func
};

export { DashboardView };
