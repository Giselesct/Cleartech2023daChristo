//não  rodei o codigo com esta função falta corrigir este codigo

import http from 'k6/http';

export const options = {
  stages: [
   { duration: '10s', target: 5 },
    { duration: '1m', target: 3},
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const url = 'https://localhost:7296/Produto';
  const payload = JSON.stringify({
    
    "id": "2qa85f64-5717-4562-b3fc-2c963f66afa6",
    "nome": "Blusinha de inverno",
    "descricao": "pequeno",
    "peso": 27.0,
    "altura": 34.0,
    "largura": 35.0,
    "comprimento": 90.9,
    "valor": 40,
    "quantidadeEmEstoque": 50,
    "centroDeDistribuicaoId": "49147378-40c0-41cd-b124-1a7317d7f1e3",
    "status": true,
    "dataEHoraCriacao": "2023-07-27T01:48:55.820Z",
    "subcategoriaId": "e85b1709-9abd-4fd4-bc74-d9a3e9978788"
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