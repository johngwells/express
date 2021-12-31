const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const friendsRouter = require('./routes/friends');
const messagesRouter = require('./routes/messages');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.render('index.ejs', {
    title: 'Skiing'
  });
})
// Parsing
app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, console.log(`server listening on ${PORT}...`));
