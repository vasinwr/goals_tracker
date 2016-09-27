const JsonDB = require('node-json-db');
var fs = require('fs');
var database;

module.exports = {
  findDB : function (){
    var items = fs.readdirSync(process.cwd())
    var db_exists = false;
    for (var i=0; i<items.length; i++) {
        if(items[i] == ".myDataBase.json"){
          console.log("here");
          db_exists = true;
          database = new JsonDB(".myDataBase", true, false);
        } 
    }
    if (!db_exists) { console.log("db not here"); process.exit(1); }
    return database;
  }
};
