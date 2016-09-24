'use strict';

const JsonDB = require('node-json-db');
var db = new JsonDB(".myDataBase", true, false);

module.exports = function (goal_name, options){
  if(options && options.task){
    try {
      db.getData("/"+goal_name); // to check if goal exists
      db.push("/"+goal_name+"/task[]", options.task, true);
      console.log("added task %s -> %s", options.task, goal_name);
    } catch (e) { 
      console.log("goal doesn't exist");
    }
  }else{
    console.log("added %s", goal_name);
    db.push("/"+goal_name);
  }
}
