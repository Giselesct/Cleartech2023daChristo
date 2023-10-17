import http from 'k6/http';

export default function () {
  const url = 'https://localhost:7296/Categoria/427ff642-748b-4597-a7e8-e0d23bfc1518';
 
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