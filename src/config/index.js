const ACCESS_TOKEN = 'BQCPBQhEOofInz9GX6DImK1AegfZGwKVPKrlVGbxbk0x8-8Qb0IqLaWWvi5n2b8amltZdn6UFVfIC5zXgqLVXFVWz9YqeY9fzXROSJ11ITETunyYZuELJbto6qHFgQPgfpqRf_5fFt-O0vkquSscmyU6Kg3t1fSQlwFpnQ&refresh_token=AQBpN-AGz75OLZ8mw61RGHt0fy4O9NCM_QJ3qRYZACEBZnAAPDq8VPY50rPjBvKMnFvgeNHNyKJVe9xbqZU9XXnzAI5IH1fR4p00EU5ey8cF5zOh_FEFQqsq-kSg_S9yGa4CqQ';

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
