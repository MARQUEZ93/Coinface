export const fetchUser = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  })
);

export const processTransfer = (transfer) => (
  $.ajax({
    data: {transfer},
    url:'/api/transfers',
    method: 'POST'
  })
);
