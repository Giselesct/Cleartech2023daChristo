//não  rodei o codigo com esta função falta corrigir este codigo

import http from 'k6/http';

export const options = {
  stages: [
   { duration: '10s', target: 3 },
    { duration: '1m', target: 1},
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const url = 'https://localhost:7296/Produto/69b7ac03-63e2-4c26-99f5-af4f79b5fd79';
  const payload = JSON.stringify({
    "nome": "Minha blusinha",
  "descricao": "Roupa casual",
  "peso": 3.2,
  "altura": 2.3,
  "largura": 5.98,
  "comprimento": 23.8,
  "valor": 30,
  "quantidadeEmEstoque": 56,
  "centroDeDistribuicaoId": "49147378-40c0-41cd-b124-1a7317d7f1e3",
  "subcategoriaId": "1681dc6e-23c1-490e-a796-387aa0bf2fbc",
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