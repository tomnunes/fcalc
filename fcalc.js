var FCalc = function(value, month) {
  this.value = value;
  this.month = month;
}

FCalc.prototype.setTax = function(tax) {
  this.tax = tax;
}

FCalc.prototype.calculatePoupa = function() {
  var rendimento;

  if (!is_positive_number(this.value) && !is_positive_number(this.tax) && !is_positive_number(this.month)) {
    $("#value-poupa").prepend("<span>Valor precisa ser preenchido e ser um número positivo.</span>");
  }

  for (var i = 0; i < this.month; i++) {
    rendimento = this.value * this.tax;
    this.value = this.value + rendimento;
  }
  return round(this.value);
}

FCalc.prototype.calculateCdb = function(cdi){
  var rendimento;
  var percent = cdi * (this.tax / 100);
  percent = percent * 0.01;

  if (!is_positive_number(this.value) && !is_positive_number(this.cdi) && !is_positive_number(this.tax) && !is_positive_number(this.month)) {
    $("#value-cdb").prepend("<span>Valor precisa ser preenchido e ser um número positivo.</span>");
  }

  for (var i = 0; i < this.month; i++) {
    rendimento = this.value * percent;
    this.value = this.value + rendimento;
  }
  return round(this.value);
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
