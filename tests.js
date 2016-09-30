QUnit.test( "calculate_poupa should pass", function( assert ) {
  var result = calculate_poupa(100,0.0065,3);
  assert.ok( result == 101.96, "Passed!" );
});
