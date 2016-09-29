const JsonDB = require('node-json-db');
var fs = require('fs');
var database;

function file_exists(path, filename){
    var items = fs.readdirSync(path);
    for (var i=0; i<items.length; i++) {
        if(items[i] == filename){
          return true;
        }
    }
    return false;
}

module.exports = {
  findDB : function (){
    var items = fs.readdirSync(process.cwd());
    var db_exists = false;
    for (var i=0; i<items.length; i++) {
        if(items[i] == ".myDataBase.json"){
          db_exists = true;
          database = new JsonDB(".myDataBase", true, false);
        } 
    }
    if (!db_exists) { console.log("db not here"); process.exit(1); }
    return database;
  },

  findDB_recursive_git : function f(path){
      console.log("recursive called" + path);
      if(file_exists(path, ".git")){
          console.log(".git exists here %s",path);
          if(file_exists(path, ".myDataBase.json")){
              return new JsonDB(path+"/.myDataBase", true, false);
          } else {
              console.log("db not found");
              process.exit(1);
          }
      } else {
        return f(path+"/../");
      }
    

  }
};
