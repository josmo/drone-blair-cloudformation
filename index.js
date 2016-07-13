"use strict";
var request = require('request');

var source = process.env.PLUGIN_SOURCE;
var aws_access_key = process.env.PLUGIN_ACCESS_KEY;
// PLUGIN_ACCESS_KEY,AWS_ACCESS_KEY_ID
var aws_secret_key = process.env.PLUGIN_SECRET_KEY;
// PLUGIN_SECRET_KEY,AWS_SECRET_ACCESS_KEY
var perms_end_point = process.env.PLUGIN_PERMS_END_POINT;
var role_name = process.env.PLUGIN_ROLE_NAME;

var yml_verified = process.env.DRONE_YAML_VERIFIED;


role_name = "NORD-NONPROD-a0123-Team";
perms_end_point = "http://mag.pc.aws.cloud.nordstrom.net/iamthelaw/role/" + role_name;

var roleinfo = request(perms_end_point, function(err, response, body) {
  console.log(body);




});




//check source for the cloudformation file and validate you can create


console.log(source);