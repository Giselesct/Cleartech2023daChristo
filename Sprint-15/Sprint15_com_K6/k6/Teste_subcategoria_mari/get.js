import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const res = http.get('https://localhost:7161/SubCategoria/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
//coloquei esta função para ter um report legal em formato html
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export function handleSummary(data) {
  return {
    "ReportdaChristo.html": htmlReport(data),
  };
}