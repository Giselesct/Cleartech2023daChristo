//rodei o codigo com esta função colocando usuarios

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '1s', target: 3 },
    { duration: '5s', target: 0 },
  ],
};

//função para inserir Categorias
export default function () {
  const url ='https://localhost:7161/Categoria';
  
  const payload = JSON.stringify({
    
  "nome": 'da gigi',
  "status": true,
  "dataCriacao": '2023-07-31T00:52:28.834Z'
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