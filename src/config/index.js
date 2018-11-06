const ACCESS_TOKEN = 'BQBldR-z3ieYZbyb3okySNQT4ezcEdz9rdrO0ypN9_tPzABZkv2A1CVfXSfXyCdDg0ezPdek9RNHy4m-dSy_qQd5eb9oUEtX0Og2t2jDP1aspH_oZj9ixmI0n68b0yb-H_B2-0Uv5TVl7SxG8vE';

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
