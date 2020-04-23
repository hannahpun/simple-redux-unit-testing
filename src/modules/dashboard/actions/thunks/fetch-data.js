import authReducer from 'modules/dashboard/reducers/authReducer';

export const { success, fail, setUsername } = authReducer.actions;
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
const auth = (username) => (dispatch, state) => {
    if (username === state().auth.correctUsername) {
        dispatch(success());
    }
    dispatch(fail());
};

const fetchUserName = () => (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error');
            }

            return res.json();
        })
        .then((json) => {
            dispatch(setUsername(json.username));
        })
        .catch((err) => {
            return err.message;
        });
};

export { auth, fetchUserName };
