const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'pages\index.html');
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});