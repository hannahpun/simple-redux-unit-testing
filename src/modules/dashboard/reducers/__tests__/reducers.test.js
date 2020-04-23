import authReducer from '../authReducer';

describe('reducer', () => {
    const reducer = authReducer.reducer;
    const initState = {
        correctUsername: '',
        isLogin: false
    };
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initState);
    });
    test('should handle success', () => {
        const expectState = {
            isLogin: true
        };
        const newState = reducer(initState, { type: 'authReducer/success' });
        expect(newState).toMatchObject(expectState);
    });
    test('should handle fail', () => {
        const expectState = {
            isLogin: false
        };
        const newState = reducer(initState, { type: 'authReducer/fail' });
        expect(newState).toMatchObject(expectState);
    });
    test('should handle setUsername', () => {
        const expectState = {
            correctUsername: 'Hannah'
        };
        const newState = reducer(initState, { type: 'authReducer/setUsername', payload: 'Hannah' });
        expect(newState).toMatchObject(expectState);
    });
});
