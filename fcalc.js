function calculate_poupa(value, tax, month) {
  var rendimento;

  if (!is_positive_number(value) && !is_positive_number(tax) && !is_positive_number(month)) {
  	$("#value-poupa").prepend("<span>Valor precisa ser preenchido e ser um número positivo.</span>");
  }

  for (var i = 0; i < month; i++) {
    rendimento = value * tax;
    value = value + rendimento;
  }
  return round(value);
}

function calculate_cdb(value, cdi, tax, month) {
  var rendimento;
  var percent = cdi * (tax / 100);
  percent = percent * 0.01;

  if (!is_positive_number(value) && !is_positive_number(cdi) && !is_positive_number(tax) && !is_positive_number(month)) {
    $("#value-cdb").prepend("<span>Valor precisa ser preenchido e ser um número positivo.</span>");
  }

  for (var i = 0; i < month; i++) {
    rendimento = value * percent;
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
