//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '1s', target: 5 },
    { duration: '5s', target: 0 },
  ],
};
export default function () {
    const url = 'https://localhost:7161/SubCategoria';
    const payload = JSON.stringify({
      
          "nome": "Para riwueza ne mari",
          "status": true,
          "dataEHoraCriacao": "2023-07-26T19:55:59.505Z",
          "categoriaId": "6"
        
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