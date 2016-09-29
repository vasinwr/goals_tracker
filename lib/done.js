'use strict';

var finder = require('./finder');

module.exports = function (goal_name, options){
  var db = finder.findDB_recursive_git(process.cwd());
  if(options && options.task){
    var index = options.task != 0 ? options.task-1 : undefined ;
    try {
      var data = db.getData("/"+goal_name+"/task["+index+"]");
      if(data.done == true) { console.log("task already done"); process.exit(1);}
      data.done = true;
      db.push("/"+goal_name+"/task["+index+"]", data, true);
    } catch (e) { 
      console.log("task doesn't exist");
    }
  }else{
    console.log("function not yet supported, try with -t option");
  }
}
