import authentication from 'modules/dashboard/reducers/authentication';

export const { success, fail, setUsername } = authentication.actions;
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
const auth = (username) => (dispatch, state) => {
    if (username === state().auth.correctUsername) {
        dispatch(success());
    }
};

const fetchUserName = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText);
            }

            return res.json();
        })
        .then((json) => {
            dispatch(setUsername(json.username));
        })
        .catch((err) => {
            console.log('err: ', err);
        });
};

export { auth, fetchUserName };
