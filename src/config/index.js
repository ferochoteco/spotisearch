const ACCESS_TOKEN = 'BQBBF8K0DwGF38TXhWxx9aaUeXlKeRvr3yxR9_SBQpeMfd5lokKiide3TF2VL0ZndMtvoIMrurLObT18lcikzLPd69ekhgmu4Zcwb2oyJ8u0ZvZwa7MUhEqz80hExJX_z8gGRMcYQZsD7h7Vqzo';

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
