var FCalc = (function() {
  function Investment(value, month) {
    this.value = value;
    this.month = month;
  }

  Investment.prototype = {
    constructor: Investment,
    value: function() {
      return 'This is the value:' + this.value;
    }
  }

  function Poupanca(value, month, tax) {
    Investment.call(this, value, month);
    this.tax = tax;
  }

  Poupanca.prototype = new Investment();

  Poupanca.prototype = {
    constructor: Poupanca,
    calculate: function() {
      Validator.isPositiveNumber(this.value,"value-poupa","Valor");
      Validator.isPositiveNumber(this.month,"value-poupa","Mês");
      Validator.isPositiveNumber(this.tax,"value-poupa","Taxa");

      var rendimento = 0;
      for (var i = 0; i < this.month; i++) {
        rendimento = this.value * this.tax;
        this.value += rendimento;
      }
      return Utils.round(this.value);
    }
  }

  return {
    Poupanca: Poupanca
  }

  FCalc.prototype.calculateCdb = function(cdi){
    Validator.isPositiveNumber(this.value,"value-cdb","Valor");
    Validator.isPositiveNumber(this.month,"value-cdb","Mês");
    Validator.isPositiveNumber(this.tax,"value-cdb","Taxa");
    Validator.isPositiveNumber(cdi,"value-cdb","Cdi");

    var rendimento = 0;
    var percent = cdi * (this.tax / 100);
    percent = percent * 0.01;

    for (var i = 0; i < this.month; i++) {
      rendimento = this.value * percent;
      this.value += rendimento;
    }
    return Utils.round(this.value);
  }
})();

var Validator = (function(){
  return {
    isPositiveNumber: function(val,selector,field){
      if(!Utils.isPositiveNumber(val)){
        $("#"+selector).prepend("<span>"+field+" precisa ser preenchido e ser um número positivo.</span>");
      }
    }
  }
})();

var Utils = (function(){
  return {
    round: function(val){
      return Math.round(val*100)/100;
    },
    isPositiveNumber: function(val){
      if (!isNaN(val) && val > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
})();
