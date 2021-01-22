const server = 'https://node-cap-table-server.herokuapp.com';
const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:2000'
    : process.env.NODE_ENV === 'production'
    ? server
    : null;

export const addOwnerData = async data => {
  const res = await fetch(`${baseURL}/api/owner`, {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

export const updateOwnerData = async data => {
  const res = await fetch(`${baseURL}/api/owner`, {
    method: 'Put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

export const removeOwnerData = async id => {
  const res = await fetch(`${baseURL}/api/owner`, {
    method: 'Delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id }),
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

export const getOwnerLists = async () => {
  const res = await fetch(`${baseURL}/api/owners`, {
    method: 'Get',
    headers: { 'Content-Type': 'application/json' },
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};
