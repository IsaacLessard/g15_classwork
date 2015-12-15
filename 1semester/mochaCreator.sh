#! /bin/bash
mkdir $1
echo "module.exports = {
	$1: function() {
	//your code here
	}
}" > $1/main.js
mkdir $1/test
echo "var code = require('../main');
var expect = require('chai').expect;
describe('$1', function(){
	it('');
});" > $1/test/test.js
cd $1
echo "{
  \"name\": \"$1\",
  \"version\": \"1.0.0\",
  \"description\": \"\",
  \"main\": \"main.js\",
  \"directories\": {
    \"test\": \"test\"
  },
  \"scripts\": {
    \"test\": \"mocha\"
  },
  \"author\": \"\",
  \"license\": \"ISC\",
  \"devDependencies\": {
    \"chai\": \"*\"
  }
}" > package.json
npm install
echo "node_modules" > .gitignore
mocha
