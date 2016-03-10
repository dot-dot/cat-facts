import path from 'path';
import Express from 'express';

var app = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/api/facts', (req, res) => {
  var getCatFact = (res) => {
    let http = require('http');
    let url = "http://catfacts-api.appspot.com/api/facts";

    var request = http.get(url, (response) => {
      response.on('data', (data) => {
        res.json(JSON.parse(data.toString()));
      });
    });
  };

  getCatFact(res);
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
