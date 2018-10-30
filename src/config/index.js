const ACCESS_TOKEN = 'BQBnYmITAVdGRn13kkMhR7in1iD_P44rxG2nTOHuG3HHV8udY12WR8tVYSf0V5uwq7_-_c5mMrfC10b-lZFTSIAJAo6jFjrP5ntTlLRoUX8LQ6tfGSKdO0ut3NddlG0XGWVuYwptxnuc0Itl1Ck';

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
