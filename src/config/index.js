const ACCESS_TOKEN = 'BQBj_z9wcTF1ZnYCBWQb-8kViler5X4hFii7XLk8eOXQUO3qPqiTpQKqAngHyYRtjC-rCTR_5n4tncUWdiKIPeupqXKcaUFZsJM_GJnzKbrSH9ZAVNBnV5E-NLSrFE3TXbXXPgzJmPeohvEYK7A';

export default {
  api: {
    baseUrl: 'https://api.spotify.com/v1/',
    options: {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + ACCESS_TOKEN
      },
      mode: 'cors',
      cache: 'default'
    }
  }
};
