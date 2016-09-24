'use strict';

const JsonDB = require('node-json-db');
var db = new JsonDB(".myDataBase", true, false);

module.exports = function (goal_name){
  console.log("added %s", goal_name);
  db.push("/"+goal_name, "");
}
