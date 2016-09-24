'use strict';

const JsonDB = require('node-json-db');
var db = new JsonDB("myDataBase", true, false);

module.exports = function (goal_name){
  console.log("removed: %s", goal_name);
  db.delete("/"+goal_name, "");
}
