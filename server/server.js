const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist/prototype-node-angular')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/prototype-node-angular/browser/index.html'));
});

app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});