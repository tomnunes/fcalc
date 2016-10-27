var FCalc = (function() {
  function Investment(value, month) {
    this.value = value;
    this.month = month;
    this.calculateIncome = function(percent) {
      var income = 0;
      for (var i = 0; i < this.month; i++) {
        income = this.value * percent;
        this.value += income;
      }
      return this.value;
    }
  }

  Investment.prototype = {
    constructor: Investment
  }

  function Poupanca(value, month, tax) {
    Investment.call(this, value, month);
    this.tax = tax;
  }

  Poupanca.prototype = new Investment();
  Poupanca.prototype.constructor = Poupanca;

  Poupanca.prototype = {
    constructor: Poupanca,
    calculate: function() {
      Validator.isPositiveNumber(this.value,"value-poupa","Valor");
      Validator.isPositiveNumber(this.month,"value-poupa","Mês");
      Validator.isPositiveNumber(this.tax,"value-poupa","Taxa");

      return Utils.round(this.calculateIncome(this.tax));
    }
  }

  function Cdb(value, month, tax, cdi) {
    Investment.call(this, value, month);
    this.tax = tax;
    this.cdi = cdi;
  }

  Cdb.prototype = new Investment();

  Cdb.prototype = {
    constructor: Cdb,
    calculate: function() {
      Validator.isPositiveNumber(this.value,"value-cdb","Valor");
      Validator.isPositiveNumber(this.month,"value-cdb","Mês");
      Validator.isPositiveNumber(this.tax,"value-cdb","Taxa");
      Validator.isPositiveNumber(this.cdi,"value-cdb","Cdi");

      var percent = this.cdi * (this.tax / 100);
      percent = percent * 0.01;

      return Utils.round(this.calculateIncome(percent));
    }  
  }

  return {
    Investment: Investment,
    Poupanca: Poupanca,
    Cdb: Cdb
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
