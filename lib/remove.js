'use strict';

const JsonDB = require('node-json-db');
var db = new JsonDB(".myDataBase", true, false);

module.exports = function (goal_name, options){
  if(options && options.task){
    var index = options.task != 0 ? options.task-1 : undefined ;
    try {
      console.log("task [%s] deleted from [%s]", 
          db.getData("/"+goal_name+"/task["+index+"]"), goal_name);
      db.delete("/"+goal_name+"/task["+index+"]");
    } catch (e) { 
      console.log("task doesn't exist");
    }
  }else{
    console.log("deleted [%s]", goal_name);
    db.delete("/"+goal_name);
  }
}
