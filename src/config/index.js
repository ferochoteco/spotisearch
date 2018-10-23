const ACCESS_TOKEN = 'BQA3nyUNVriGnO_BdOKBK1VnVOnmLasbg92uqDCEw42scrFhwdPAE8onmnLX-HI4r0bGDvQI7WpgnWTsrmFBi6Jyk3vDFKPSScXcX7IKtb86vlHfQTAsg-WH5dykTWJkRlyAMZSTxjLyxqcc81U';

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
