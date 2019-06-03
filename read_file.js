var txt = process.argv.slice(2)[0];

var log = function(str){
  console.log(str);
}

// log(txt);

var fs = require("fs");

/*
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
*/

fs.readFile(txt, function (err, data){
  if(err){
    return log(err);
  }
  log("Asynchronous read: "+ data.toString());
});

