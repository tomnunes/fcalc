function calculate_poupa(value, tax, month) {
  var rendimento;

  if (!is_positive_number(value) && !is_positive_number(tax) && !is_positive_number(month)) {
  	$("#value").prepend("<span>Valor precisa ser preenchido e ser um número positivo.</span>");
  }

  for (var i = 0; i < month; i++) {
    rendimento = value * tax;
    value = value + rendimento;
  }
  return round(value);
}

function round(a) {
  return Math.round(a*100)/100;
}

function is_positive_number(value) {
  if (!isNaN(value) && value > 0) {
  	return true;
  } else {
  	return false;
  }
}
