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
    const url = 'https://localhost:7161/Categoria/ID';
    const payload = JSON.stringify({

      "CarrinhoId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ProdutoId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "quantidade": 0
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
