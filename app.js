import { app, query, errorHandler } from 'mu';
import request from 'request';

app.post('/', function( req, res ) {
  request(req.query.url, function (error, response, body) {
    res.send(body);
  });
});
