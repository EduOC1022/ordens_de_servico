// Importa o módulo http do Node.js
const http = require('http');

// Cria um servidor que responde com "Olá Mundo!" a qualquer requisição
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá Mundo!\n');
  });
  
  // O servidor escuta na porta 3000
  server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando em http://127.0.0.1:3000/', server);
  });
  