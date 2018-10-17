export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

//logout deletes session token, and sets current_uset to nil,
//so no argument is needed
export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
