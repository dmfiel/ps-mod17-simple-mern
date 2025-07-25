const express = require('express');
const path = require('path');

const app = express();

const routeTasks = require('./src/routes/tasks');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

app.use('/api/tasks', routeTasks, (req, res) => res.sendStatus(401));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
