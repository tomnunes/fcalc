QUnit.test( "calculate_poupa should return the expected result", function( assert ) {
  var result = calculate_poupa(100,0.0065,3);
  assert.ok( result == 101.96, "Passed!" );
});

QUnit.test( "calculate_poupa should return an alert message", function( assert ) {
  var result = calculate_poupa('','','');
  assert.ok( result == false, "Passed!" );
});

QUnit.test( "is_positive_number should return false with a string", function( assert ) {
  var result = is_positive_number('A');
  assert.ok( result === false, "Passed!" );
});

QUnit.test( "is_positive_number should return false with a negative number", function( assert ) {
  var result = is_positive_number(-1);
  assert.ok( result === false, "Passed!" );
});

QUnit.test( "is_positive_number should return true with a positive number", function( assert ) {
  var result = is_positive_number(100);
  assert.ok( result === true, "Passed!" );
});
