QUnit.test( "calculate_poupa should return the expected result", function( assert ) {
  var poupanca = new FCalc(100, 3);
  poupanca.setTax(0.0065);
  var result = poupanca.calculatePoupa();
  assert.ok( result === 101.96, "Passed!" );
});

QUnit.test( "calculate_poupa should return an alert message", function( assert ) {
  var poupanca = new FCalc("", "");
  poupanca.setTax("");
  var result = poupanca.calculatePoupa();
  assert.ok( result == false, "Passed!" );
});

QUnit.test( "is_positive_number should return false with a string", function( assert ) {
  var result = Utils.isPositiveNumber("A");
  assert.ok( result === false, "Passed!" );
});

QUnit.test( "is_positive_number should return false with a negative number", function( assert ) {
  var result = Utils.isPositiveNumber(-1);
  assert.ok( result === false, "Passed!" );
});

QUnit.test( "is_positive_number should return true with a positive number", function( assert ) {
  var result = Utils.isPositiveNumber(100);
  assert.ok( result === true, "Passed!" );
});

QUnit.test( "calculate_poupa should create a span message", function( assert ) {
  var poupanca = new FCalc("", "");
  poupanca.setTax("");
  poupanca.calculatePoupa();
  var span = document.getElementById("qunit-fixture").getElementsByTagName("span");
  assert.equal( span[0].innerHTML, "Taxa precisa ser preenchido e ser um número positivo." );
  assert.equal( span[1].innerHTML, "Mês precisa ser preenchido e ser um número positivo." );
  assert.equal( span[2].innerHTML, "Valor precisa ser preenchido e ser um número positivo." );
});

QUnit.test( "calculate_cdb should return the expected result", function( assert ) {
  var cdb = new FCalc(100, 3);
  cdb.setTax(116);
  var result = cdb.calculateCdb(1.13);
  assert.ok( result === 103.98, "Passed!" );
});

QUnit.test( "calculate_cdb should retunr an alert message", function ( assert ) {
  var cdb = new FCalc("", "");
  cdb.setTax("");
  var result = cdb.calculateCdb("");
  assert.ok( result == false, "Passed!");
});

QUnit.test( "calculate_cdb should create a span message", function ( assert ) {
  var cdb = new FCalc("", "");
  cdb.setTax("");
  cdb.calculateCdb("");
  var span = $("#qunit-fixture span");
  assert.equal( span.eq(0).text(), "Cdi precisa ser preenchido e ser um número positivo." );
  assert.equal( span.eq(1).text(), "Taxa precisa ser preenchido e ser um número positivo." );
  assert.equal( span.eq(2).text(), "Mês precisa ser preenchido e ser um número positivo." );
  assert.equal( span.eq(3).text(), "Valor precisa ser preenchido e ser um número positivo." );
});