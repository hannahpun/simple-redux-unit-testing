import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { auth, fetchUserName } from '../fetch-data';

const mockStore = configureMockStore([thunk]);

describe('thunk', () => {
    let store = null;
    const initialState = {};

    beforeEach(() => {
        // mock 一個 store
        store = mockStore(initialState);
    });

    afterEach(() => {
        fetchMock.restore();
    });
    describe('async fetchUserName action dispatcher', () => {
        test('success', async () => {
            // mock 這個 API 還有回傳值
            fetchMock.mock('https://jsonplaceholder.typicode.com/users/1', { status: 200, body: { username: 'Bret' } });

            const expectedActions = [{ type: 'authReducer/setUsername', payload: 'Bret' }];

            await store.dispatch(fetchUserName());

            const actualActions = store.getActions();

            expect(actualActions).toMatchObject(expectedActions);
        });

        test('fail', async () => {
            // mock 這個 API 還有回傳值
            fetchMock.mock('https://jsonplaceholder.typicode.com/users/1', { status: 400 });
            const callBack = await store.dispatch(fetchUserName());
            expect(callBack).toBe('Error');
        });
    });

    describe('auth action dispatcher', () => {
        // 定義好 mock
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({
            auth: {
                correctUsername: 'Bret'
            }
        }));
        test('username equal to correctUsername', () => {
            auth('Bret')(dispatch, getState);
            expect(dispatch).toBeCalledWith({ type: 'authReducer/success' });
        });
        test('username does not equal to correctUsername', () => {
            auth('Amy')(dispatch, getState);

            expect(dispatch).toBeCalledWith({ type: 'authReducer/fail' });
        });
    });
});
