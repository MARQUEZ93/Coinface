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

export const processTransfer = (transfer) => (
  $.ajax({
    data: {transfer},
    url:'/api/transfers',
    method: 'POST'
  })
);

export const processCard = (card) => (
  $.ajax({
    data: {card},
    url:'/api/card',
    method: 'POST'
  })
);

export const removeCard = () => (
  $.ajax({
    url: '/api/card',
    method: 'DELETE'
  })
);
