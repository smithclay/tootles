var restify = require('restify');
var pkg = require('../package.json');
var program = require('commander');
var util = require('util');

var DEFAULT_PORT = 7388;

program
  .version(pkg.version)
  .option('-p, --port [' + DEFAULT_PORT +']', 'Port number [' + DEFAULT_PORT + ']', DEFAULT_PORT)
  .option('-o, --output [json]', 'Output the response in this format [json, summary]', 'json')
  .parse(process.argv);

var server = restify.createServer({
  name: pkg.name,
  version: pkg.version
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/', function (req, res, next) {
  res.send('I lost my marbles.');
  return next();
});

server.post('/pd-webhook', function (req, res, next) {
  if (program.output === 'summary') {
  	try {
  	  var messages = req.params.messages;
  	  messages.forEach(function(msg) {
  	  	var d = msg.data.incident;
  	  	var msg = util.format('PagerDuty Alert. Incident #%s has been %s.', d.incident_number, d.status);
  	  	console.log(msg);
  	  });
  	} catch (e) {
  	  console.log('Could not parse summary of webhook response.');
  	}
  } else {
    console.log(JSON.stringify(req.params));	
  }
  res.send(201);
  return next();
});

exports.start = function() {
  server.listen(program.port, function () { });
};

