//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '1s', target: 8 },
    { duration: '10s', target: 3 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const url = ('https://localhost:7296/CarrinhoDeCompras');
  
  const payload = JSON.stringify({
    
        "produtoId": "12c63e17-e2fb-4ded-bc14-0b3479f1a860",
        "quantidade": 1,
      "cep": "06132290",
      "numero": 26,
      "complemento": "casa"    
      
      
  });

  const params = {
    headers: {
      'Content-Type': 'application/json-patch+json',
      
    },
  };

  http.post(url, payload, params);
 
}

//coloquei esta função para ter um report legal em formato html
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export function handleSummary(data) {
  return {
    "ReportdaChristo.html": htmlReport(data),
  };
}