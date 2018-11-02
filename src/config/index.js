const ACCESS_TOKEN = 'BQCgZXl4zok5Et8F8J2PNGxjD2Y1fUqKrCUjxtjpNaUuPNQfhwYMYOa-8WG6WqBtODCL6n7tKobG37gBMkOU_St8IhITHpH8esKdQeJJHsdwVkdoq1y25I-bgmM8aeoL96xLKP_PtakzAZRJxcA';

export default {
  api: {
    url: 'https://api.spotify.com/v1/',
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
