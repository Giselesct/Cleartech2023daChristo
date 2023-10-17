//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '1s', target: 3 },
    { duration: '10s', target: 1 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const url = ('https://localhost:7296/CentroDeDistribuicao');
  
  const payload = JSON.stringify({
    
      "nome": "Ct de gigizinha",
      "logradouro": "string",
      "numero": 51,
      "complemento": "casa",
      "bairro": "string",
      "cidade": "string",
      "uf": "string",
      "cep": "06385160",
      "status": true,
      "dataEHoraCriacao": "2023-08-01T12:35:23.310Z"
    
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