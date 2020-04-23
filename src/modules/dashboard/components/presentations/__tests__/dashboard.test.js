import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'test/testUtils';

import { DashboardView } from '../dashboard';

const defaultProps = { login: false };
/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };

    return shallow(<DashboardView {...setupProps} />);
};

describe('Render correct component before login', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = setup();
        wrapper.setState({ hasSubmit: false });
    });

    test('render without error', () => {
        const appComponent = findByTestAttr(wrapper, 'dashboard');
        expect(appComponent.exists()).toBe(true);
    });
    test('render <input> ', () => {
        const appComponent = findByTestAttr(wrapper, 'form-group');
        expect(appComponent.length).toBe(1);
    });
    test('does not render welcome text ', () => {
        const appComponent = findByTestAttr(wrapper, 'welcome-text');
        expect(appComponent.exists()).toBe(false);
    });
});

describe('Render correct component after login', () => {
    test('render welcome text', () => {
        const wrapper = setup({ login: true });
        const appComponent = findByTestAttr(wrapper, 'welcome-text');
        expect(appComponent.exists()).toBe(true);
    });
});

describe('Handler function', () => {
    let wrapper = null;
    let instance = null;

    beforeEach(() => {
        wrapper = setup({ auth: jest.fn() });
        wrapper.setState({ hasSubmit: false });
        instance = wrapper.instance();
    });
    test('simulate onchange - handleChange', () => {
        const appComponent = findByTestAttr(wrapper, 'input');
        const expectedEvent = {
            target: { value: 'testing state' }
        };

        appComponent.simulate('change', expectedEvent);
        expect(wrapper.state('username')).toBe('testing state');
    });

    describe('function - handleKeyDown', () => {
        test('when key equal enter ', () => {
            const expectedEvent = {
                key: 'Enter'
            };
            instance.handleKeyDown(expectedEvent);
            expect(wrapper.state('hasSubmit')).toBe(true);
        });
        test('when key does not equal enter ', () => {
            const expectedEvent = {
                key: 'Space'
            };
            instance.handleKeyDown(expectedEvent);
            expect(wrapper.state('hasSubmit')).toBe(false);
        });
    });
});

describe('show correct class name in form-group', () => {
    test('Show invalid class name when hasSubmit is true', () => {
        const wrapper = setup();
        wrapper.setState({ hasSubmit: true });
        const appComponent = findByTestAttr(wrapper, 'form-group').hasClass('invalid');
        expect(appComponent).toBe(true);
    });
});
