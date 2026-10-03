function fmt(n, d = 2) {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });
}

function fmtCurrency(n) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function fmtPercent(n, d = 2) {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d }) + '%';
}

function val(id) {
  return parseFloat(document.getElementById(id).value) || 0;
}

function showResult(id) {
  document.getElementById(id).classList.add('show');
}

function hideResult(id) {
  document.getElementById(id).classList.remove('show');
}

function calcAmortization(principal, monthlyRate, months) {
  if (monthlyRate === 0) return principal / months;
  return principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
}

function compoundInterest(p, r, n, t) {
  return p * Math.pow(1 + r / n, n * t);
}

function presentValue(fv, r, n, t) {
  return fv / Math.pow(1 + r / n, n * t);
}

function futureValue(pv, r, n, t) {
  return pv * Math.pow(1 + r / n, n * t);
}
