// servidor.js

var http = require('http');
var fs = require('fs');      // fs = file system, mexe em arquivos
var path = require('path');  // monta caminhos de pasta

var servidor = http.createServer(function (req, res) {

  var arquivo = path.join(__dirname, 'public', 'index.html');
  var conteudo = fs.readFileSync(arquivo);

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(conteudo);
});

servidor.listen(3333, function () {
  console.log('Ligado em http://localhost:3333');
});
