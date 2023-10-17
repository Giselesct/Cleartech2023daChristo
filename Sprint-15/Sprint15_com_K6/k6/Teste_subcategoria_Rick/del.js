import http from 'k6/http';

export default function () {
  const url = 'https://localhost:7296/Subcategoria/08db6e8b-e62f-493d-88ae-f35e065cea9e';
 

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.del(url, params);
}
//coloquei esta função para ter um report legal em formato html
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export function handleSummary(data) {
  return {
    "ReportdaChristo.html": htmlReport(data),
  };
}