function calculate_poupa(value, tax, time) {
  for (var i = 0; i < time; i++) {
    rendimento = value * tax;
    value = value + rendimento;
  }
  return round(value);
}

function round(a) {
  return Math.round(a*100)/100;
}
