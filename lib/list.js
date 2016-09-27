"use strict"
var finder = require('./finder');
var colors = require('colors/safe');

module.exports = function(){
  var db = finder.findDB();
  console.log("Your Goals:");
  var data = db.getData("/");
  var keys = Object.keys(data);
  if( keys.length === 0 ) console.log(colors.blue("  empty"));
  for( var i in keys){
    console.log(colors.green("  " + keys[i]));
    
    if(data[keys[i]].task) {
      for (var j in data[keys[i]].task) {
        var count = parseInt(j) + 1;
        console.log(colors.red("    " + count + ") " + data[keys[i]].task[j]));
      }
    }
  }
};
