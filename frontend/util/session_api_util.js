export const login = (user) => (
  $.ajax({
    data: {user},
    url:'/api/session',
    method: 'POST'
  })
);

export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);

export const signup = (user) => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data:{user}
  })
);
