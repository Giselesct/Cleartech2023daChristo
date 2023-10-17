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
  const url = 'https://localhost:7296/Subcategoria';
  const payload = JSON.stringify({
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afd5",
    "nome": "Bonequinhassss",
    "status": true,
    "dataEHoraCriacao": "2023-10-16T18:27:54.176Z",
    "categoriaId": "23345b3b-551f-48e7-95d7-26b43ef55dbe"
      
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