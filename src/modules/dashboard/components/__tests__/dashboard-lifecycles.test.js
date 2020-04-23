import React from 'react';
import { shallow } from 'enzyme';

import { DashBoardLifecycles } from '../containers/lifecycles';

// 把 presentations 裡的 DashboardView 改成 <div>DashboardView</div>
// 因為我們想 focus 在 lifecycles 所以不要牽扯到其他檔案
jest.mock('modules/dashboard/components/presentations', () => ({
    // eslint-disable-next-line react/display-name
    DashboardView: () => <div>DashboardView</div>
}));

describe('DashBoardLifecycles', () => {
    const fetchUserName = jest.fn();

    let wrapper = null;

    const defaultProps = {
        fetchUserName
    };

    beforeEach(() => {
        wrapper = shallow(<DashBoardLifecycles {...defaultProps} />);
    });

    afterEach(fetchUserName.mockReset);

    test('calls fetchUserName on mount', () => {
        expect(fetchUserName).toHaveBeenCalled();
    });

    describe('render', () => {
        it('renders DashboardView', () => {
            expect(wrapper.find('DashboardView').length).toBe(1);
        });
    });
});
