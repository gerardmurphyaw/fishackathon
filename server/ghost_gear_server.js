var restify = require('restify');
var item = require('Item');
var db = require('db');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function items( req, res, next ) {
	res.send( 
		[{id:123}, {id:456}, {id:789}]
	)
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/ghostgear/items', items)

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});