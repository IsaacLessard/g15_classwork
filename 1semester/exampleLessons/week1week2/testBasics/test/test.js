var code = require('../main');
var expect = require('chai').expect;

describe('Hello World', function(){
  it('should return "Hello World"', function(){
	expect(code.helloWorld()).to.equal('Hello, World');    
  });
});
