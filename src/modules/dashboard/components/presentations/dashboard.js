import React from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss';

const DashboardView = ({ login, hasSubmit, username, handleChange, handleKeyDown }) => {
    return (
        <div className='dashboard'>
            {/* <Input /> */}
            {/* <h1>Howdy, Bret !</h1> */}
            {login ? (
                <h1>Howdy, {username} !</h1>
            ) : (
                <div className={`form-group ${hasSubmit ? 'invalid' : ''}`}>
                    <label htmlFor='username'>Please Enter Your Username</label>
                    <input
                        className='form-control'
                        id='username'
                        type='text'
                        value={username}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <small className='form-text text-muted'>Wrong Username</small>
                </div>
            )}
        </div>
    );
};

DashboardView.propTypes = {
    login: PropTypes.bool.isRequired,
    hasSubmit: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired
};

export { DashboardView };
