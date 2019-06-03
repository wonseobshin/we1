var https = require('https');

function log (str){
  console.log(str);
}

log('I did it!');

var options = {
  host: 'www.example.org',
  path: '/'
}

var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk){
    console.log('[-- CHUNK OF LENGTH ', chunk.length + ' --]');
    log(chunk.toString());
  });
}

log('Im about to make the request!');

https.request(options, callback).end();

log("Ive made the request!");