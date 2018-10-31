const ACCESS_TOKEN = 'BQBpghgcMpm-VBRY-6sOM9YY4o2qdxI7IcjBaotYtqNvNuj3_gkFCt7Z_n9Ojp-VLkkS0Hd-FA5VyLZYU8rKZSdBKH4FraQ1-nCLWnVDT_qO3bG8CLNcILvMz3OTpVv_iWOFUEippOMvyyblI-A';

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
