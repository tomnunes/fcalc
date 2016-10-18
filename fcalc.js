var FCalc = (function(){
  var value = 0;
  var tax = 0;
  var month = 0;

  return{
    value: function(){
      return value;
    },
    setValue: function(val){
      value = val;
    },
    tax: function(){
      return tax;
    },
    setTax: function(val){
      tax = val;
    },
    month: function(){
      return month;
    },
    setMonth: function(val){
      month = val;
    },
    calculatePoupa: function(){
      var rendimento;

      if (!is_positive_number(value) && !is_positive_number(tax) && !is_positive_number(month)) {
        $("#value-poupa").prepend("<span>Valor precisa ser preenchido e ser um número positivo.</span>");
      }

      for (var i = 0; i < month; i++) {
        rendimento = value * tax;
        value = value + rendimento;
      }
      return round(value);
    },
    calculateCdb: function(cdi){
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
  }
})();

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
