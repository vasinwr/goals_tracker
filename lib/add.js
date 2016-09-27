'use strict';

var finder = require('./finder');
var prompt = require('prompt');

module.exports = function (goal_name, options){
  var db = finder.findDB();
  if(options && options.task){
    try {
      db.getData("/"+goal_name); // to check if goal exists
      prompt.start();

      prompt.get(['hour'], function(err,result) {
        db.push("/"+goal_name+"/task[]", { name: options.task, hour: result.hour, done: false}, true);
        console.log("added task %s -> %s", options.task, goal_name);
      });

    } catch (e) { 
      console.log("goal doesn't exist");
    }
  }else{
    console.log("added %s", goal_name);
    db.push("/"+goal_name+"/task[]");
    db.delete("/"+goal_name+"/task[0]");
  }
}
