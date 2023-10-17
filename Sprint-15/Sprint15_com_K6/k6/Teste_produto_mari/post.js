
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 3 },
    { duration: '1m', target: 2 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const url =  'https://localhost:7161/Produto';
  const payload = JSON.stringify({
    
    "nome": "Blusinha da Gi",
    "descricao": "Pequena",
    "peso": 27,
    "altura": 34,
    "largura": 35,
    "comprimento": 90,
    "valor": 40,
    "quantidadeEmEstoque": 50,
    "centroDeDistribuicaoId": "1",
    "status": true,
    "dataEHoraCriacao": "2023-07-27T01:48:55.820Z",
    "subcategoriaId": "5"
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