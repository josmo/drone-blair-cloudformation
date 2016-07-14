"use strict";
var yamljs = require("yamljs");
require("should");

var blair = require("../index");

var validCF = yamljs.load("./test/mocks/validCF.yml");
var invalidCF = yamljs.load("./test/mocks/invalidCF.yml");

var permissions = require("./mocks/permissions.json");


describe("Validation for the cloudFromation against our current permissions", function() {

  it.skip("Should return true when the template is valid", function(done) {
    blair.validate(validCF, permissions).should.equal(true);

    done();
  });


  it.skip("Should return false with an invalid template", function(done){
    blair.validate(invalidCF, permissions).should.equal(false);
    done();
  });

});
