const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Neo'
  },
  {
    id: 1,
    name: 'Trinity'
  }
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

// Parsing
app.use(express.json());

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name'
    })
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name
  };
  friends.push(newFriend);

  res.json(newFriend);
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:id', (req, res) => {
  const id = Number(req.params.id);
  const friend = friends[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
});

app.get('/messages', (req, res) => {
  res.send('messages');
});

app.post('/messages', (req, res) => {
  console.log('Updating Messages');
});

app.listen(PORT, console.log(`server listening on ${PORT}...`));
