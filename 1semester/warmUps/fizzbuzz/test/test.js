var code = require('../main');
var expect = require('chai').expect;

describe('fizzbuzz', function(){
  it('should return full array', function(){
    expect(code.fizzbuzz(16).toString()).to.equal([1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz",16].toString());
  });
});
