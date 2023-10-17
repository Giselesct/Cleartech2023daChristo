//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http, { expectedStatuses } from 'k6/http';

export const options = {
  stages: [
    { duration: '1s', target: 5 },
    { duration: '10s', target: 3 },
    { duration: '5s', target: 0 },
  ],
};

//função para inserir Categorias
export default function () {
  const url = 'https://localhost:7296/Categoria';
  
  const payload = JSON.stringify({
    "id": "e948cd8c-0b2c-4c19-9453-9aa0efa643cg",
    "nome": "Boneca",
    "status": true,
    "criacao": "25/07/2023 19:16:37",
    "modificacao": "Não houve modificações."
  
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