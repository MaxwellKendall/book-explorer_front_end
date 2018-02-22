/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import axios from 'axios';

export const setActiveUser = createAction('SET_ACTIVE_USER');
export const setLoading = createAction('SET_LOADING');
export const setModal = createAction('SET_MODAL');
export const setError = createAction('SET_ERROR');

export const getActiveUser = () => (
(dispatch) => {
    return axios.get('/activeuser')
        .then(res => console.log('activeUser Response: ', res))
        // .then(res => dispatch(setActiveUser(res.data.userid)))
        .catch(err => console.log('activeUser Error response: ', err));
}
);
