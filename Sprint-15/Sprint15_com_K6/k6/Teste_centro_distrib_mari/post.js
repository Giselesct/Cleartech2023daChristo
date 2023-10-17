//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '1s', target: 10 },
    { duration: '10s', target: 5 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const url = ('https://localhost:7161/CentroDistribuicao');
  
  const payload = JSON.stringify({
    
      "nome": "CTbemvindo",
      "logradouro": "string",
      "numero": 103,
      "complemento": "casa",
      "bairro": "string",
      "localidade": "string",
      "uf": "string",
      "cep": "06385270",
      "status": true,
      "dataCriacao": "2023-08-01T12:26:53.072Z"
    
    
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      
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