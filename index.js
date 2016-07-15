"use strict";
var cfn = require("cfn");
var bluebird = require("bluebird");
var path = require("path");
var glob = require("glob");

var source = process.env.PLUGIN_SOURCE;
var aws_access_key = process.env.PLUGIN_ACCESS_KEY;
// PLUGIN_ACCESS_KEY,AWS_ACCESS_KEY_ID
var aws_secret_key = process.env.PLUGIN_SECRET_KEY;
// PLUGIN_SECRET_KEY,AWS_SECRET_ACCESS_KEY
var region = (process.env.PLUGIN_REGION) ? process.env.PLUGIN_REGION : "us-west-2";
// var perms_end_point = process.env.PLUGIN_PERMS_END_POINT;
// var role_name = process.env.PLUGIN_ROLE_NAME;

var yml_verified = (process.env.DRONE_YAML_VERIFIED) ? process.env.DRONE_YAML_VERIFIED : true;

module.exports = {
  process_cloudFormation: function(){
    if(!yml_verified && (!aws_access_key || !aws_secret_key)){
      console.log("Sorry but you must use a verfied YML to Instance role");
      return 1;
    }
    var config ={};
    if (aws_access_key && aws_secret_key){
      config = {"accessKeyId": aws_access_key, "secretAccessKey": aws_secret_key};
    }
    config.region = region;

    glob(source,null, function (err, files) {
      if (err) {
        throw err;
      }
      var promises = files.map(file =>{
             var templateName = path.basename(file, ".json");
             console.log(config);
             console.log("teamplename: " + templateName + " file: " + file + " config: " + config);
             return cfn(templateName, file, config);
           });
      bluebird.all(promises)
        .then(() =>{
          console.log("everything was created");
        }, (err) =>{
          console.log(err);
        });
    });
  }

};
module.exports.process_cloudFormation();

