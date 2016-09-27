'use strict';

const JsonDB = require('node-json-db');
var fs = require('fs');

module.exports = function (){
  // TODO: create a common database file for the whole project like git init
    var items = fs.readdirSync(process.cwd())
    var db_exists = false;
    for (var i=0; i<items.length; i++) {
        if(items[i] == ".myDataBase.json"){
          db_exists = true;
          database = new JsonDB(".myDataBase", true, false);
        } 
    }
    if (db_exists) {  
      console.log("init failed: goals has already beed initialised here");
      process.exit(1);
    } else {
       //this will create .myDataBase file in current directory
       var database = new JsonDB(".myDataBase", true, false);
    }
    


}
