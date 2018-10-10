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
    url: '/api/user',
    data: { user }
  })
);

//logout deletes session token, so no argument is needed
export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
