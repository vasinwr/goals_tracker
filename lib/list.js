"use strict"
const JsonDB = require('node-json-db');
var db = new JsonDB(".myDataBase", true, false);
var colors = require('colors/safe');

module.exports = function(){
  console.log("Your Goals:");
  var keys = Object.keys(db.getData("/"));
  for( var i in keys){
    console.log(colors.green("  " + keys[i]));
  }
};
