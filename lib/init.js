'use strict';

var finder = require('./finder');
const JsonDB = require('node-json-db');
var fs = require('fs');

module.exports = function (){
  //init at the directory containing .git
  var path_to_git = finder.find_path_git(process.cwd());
  console.log(path_to_git);
  if(finder.file_exists(path_to_git, ".myDataBase.json")){
    console.log("init failed: goals has alread been initialised in this git repository");
    process.exit(1);
  } else {
    console.log(path_to_git+"/.myDataBase");
    var database = new JsonDB(path_to_git+"/.myDataBase", true, false);
  }


    // this initialises database on current dir
    // TODO: use this for goals --local option
  /*
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
*/

}
