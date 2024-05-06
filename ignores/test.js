const fs = require('fs-extra');

var cars = ["Saab", "Volvo", "BMW"];

cars.forEach(myFunction);
function myFunction(value) {
  console.log(value);
}

let all_apps_paths = [];

function addAppPath(p_path, path = p_path, lengt = 0) {
  // Scan the path and find out if it is a dir or ther is an index.ejs inside it
  let files = fs.readdirSync(path + '/');
  if( files.includes('index.ejs') ) {
      let _p = path.replace(p_path, '');
      if( !all_apps_paths.includes(_p) ) all_apps_paths.push(path.replace(p_path, ''));
  } 

  files.forEach( file => {
      if( fs.statSync(path + '/' + file).isDirectory() ) {
          addAppPath(p_path, path + '/' + file, lengt + 1);
      } 
  });
}
function getAppAndPAramsFromPath( p_path )
{
  let obj = {
    app: null,
    params: null
  }; 

  if( all_apps_paths.includes(p_path) ) {
    obj.app = p_path;
    obj.params = null;
  } else {
    all_apps_paths.forEach( app => {
      if( p_path.startsWith(app) ) {
        obj.app = app;
        obj.params = p_path.replace(app, '').split('/').filter( item => item != '' );
      }
    });
  }

  return obj;
}


addAppPath('./frontend/dist/apps');

console.log( all_apps_paths );

console.log(getAppAndPAramsFromPath('/auth/name_a/id_2'));


