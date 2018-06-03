var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

var totalPayable = 210         // £2.10
var cashPaid     = 300         // £3.00
var difference    =  90         // 90p
var change       = [50,20,20]  // 50p, 20p, 20p
var test = require('tape'); // assign the tape library to the variable "test"
var calculateChange = require('../lib/change-calculator.js');  // require the calculator module

test('calculateChange(215, 300) should return [50, 20, 10, 5]', function(t) {
  var result = calculateChange(215, 300); // expect an array containing [50,20,10,5]
  var expected = [50, 20, 10, 5];
  t.deepEqual(result, expected);
  t.end();
});