var https = require('https');

function log (str){
  console.log(str);
}

log('I did it!');

var options = {
  host: 'www.example.org',
  path: '/'
}

var callback = function (){
  log('in response handler callback!');
}

log('Im about to make the request!');

https.request(options, callback).end();

log("Ive made the request!");