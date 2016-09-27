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
    console.log(colors.green("  " + keys[i])); //print goal
    var total_hours;
    var completed_hours; 

    if(data[keys[i]].task) {
      total_hours = 0;
      completed_hours = 0;
      for (var j in data[keys[i]].task) {
        var count = parseInt(j) + 1;
        var task_done = data[keys[i]].task[j].done;
        if(task_done){
          console.log(colors.blue("    " + count + ") " + data[keys[i]].task[j].name + "    [DONE]"));
          completed_hours += parseInt(data[keys[i]].task[j].hour.hour);  // has to be hour.hour because of the design of 'prompt'
        } else {
          console.log(colors.red("    " + count + ") " + data[keys[i]].task[j].name));
        } // print tasks
        total_hours += parseInt(data[keys[i]].task[j].hour.hour);
      }
    }
    console.log("    progress: " + completed_hours + "/" + total_hours); //print overall progress
  }
};
