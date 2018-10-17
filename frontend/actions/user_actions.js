import * as APIUtil from '../util/user_api_util';

export const GET_USER = 'GET_USER';

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(getUser(user)))
);

const getUser = user => ({
  type: GET_USER,
  user
});
