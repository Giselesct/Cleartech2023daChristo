//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 3 },
    { duration: '1m', target: 2 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const url = 'https://localhost:7296/Subcategoria/1681dc6e-23c1-490e-a796-387aa0bf2fbc';
  const payload = JSON.stringify({
    
    "nome": " Não delicada",
    "status": true,
    "dataEHoraModificacao": "2023-10-13T13:16:56.288Z"
      
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