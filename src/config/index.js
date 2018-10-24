const ACCESS_TOKEN = 'BQC1SLqMQ_7dpniVaTaJ81CamVNRggOU57IDbz7RDfPq7uUlrXXt7OMtqBjapOweMqXp1LY4sJV9_nC86Nyl7i3xQM_evuQl4jqlh7DyTRFP2ERkH2HKvNufoD0ioJblUpw-h7EDCyfpn-Aobv4';

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
