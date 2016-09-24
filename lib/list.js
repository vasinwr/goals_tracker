"use strict"
const JsonDB = require('node-json-db');
var db = new JsonDB("myDataBase", true, false);

module.exports = function(){
  console.log("list is called");
  console.log(db.getData("/"));
};
