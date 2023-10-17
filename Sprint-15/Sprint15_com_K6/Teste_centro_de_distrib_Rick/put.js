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
  const url = ('https://localhost:7296/CentroDeDistribuicao/15e8a0ec-350a-4d96-b24c-32fef5dd1d31');
  
  const payload = JSON.stringify({
    
    
        "nome": "Ct da Christo",
        "numero": 61,
        "complemento": "marçalo",
        "cep": "06385270",
        "status": true
      
    
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      
    },
  };

  http.put(url, payload, params);

  
}


//coloquei esta função para ter um report legal em formato html
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export function handleSummary(data) {
  return {
    "ReportdaChristo.html": htmlReport(data),
  };
}