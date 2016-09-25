"use strict"
const JsonDB = require('node-json-db');
var db = new JsonDB(".myDataBase", true, false);
var colors = require('colors/safe');

module.exports = function(){
  console.log("Your Goals:");
  var data = db.getData("/");
  var keys = Object.keys(data);
  for( var i in keys){
    console.log(colors.green("  " + keys[i]));

    
    if(data[keys[i]].task) {
      for (var j in data[keys[i]].task) {
        console.log(colors.green("    " + data[keys[i]].task[j]));
      }
    }
  }
};
