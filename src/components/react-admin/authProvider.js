// in src/components/react-admin/authProvider.js
const authProvider = {
  login: ({ email, password }) => {
    const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
    const request = new Request(`${API_URL}/tokens/create`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(auth => {
        localStorage.setItem('auth', JSON.stringify(auth));
      })
      .catch(() => {
        throw new Error('Network error')
      });
  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  checkAuth: () =>
    (localStorage.getItem('auth') ? Promise.resolve() : Promise.reject()),
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getIdentity: () => {
    const token = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : undefined
    const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
    const request = new Request(`${API_URL}/user`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `${token.token_type} ${token.access_token}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(() => {
        throw new Error('Network error')
      });
  },
  getPermissions: () => Promise.resolve('')
};

export default authProvider;
