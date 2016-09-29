const JsonDB = require('node-json-db');
var fs = require('fs');
var database;


var file_exists = function (path, filename){
    var items = fs.readdirSync(path);
    for (var i=0; i<items.length; i++) {
        if(items[i] == filename){
          return true;
        }
    }
    return false;
}


module.exports = {
  // now not being used
  /*
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
  */
  findDB_recursive_git : function f(path){
      if(file_exists(path, ".git")){
          if(file_exists(path, ".myDataBase.json")){
              return new JsonDB(path+"/.myDataBase", true, false);
          } else {
              console.log("db not found, %s", path);
              process.exit(1);
          }
      } else {
          try{ 
            return f(path+"/..");
          } catch (e) {
            console.log("error: make sure you are in a git repository");
            process.exit(1);
          }
      }
  },

  find_path_git : function f(path){
      if(file_exists(path, ".git")){
          return path;
      } else {
          return f(path+"/..");
      }
  },

  file_exists : file_exists

};
