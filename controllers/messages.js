const path = require('path');

function getMessages(req, res) {
  const imagePath = path.join(__dirname, '..', 'public', 'ski.jpg');
  res.sendFile(imagePath);
}

function postMessage(req, res) {
  console.log('Updating Messages');
}

module.exports = {
  getMessages,
  postMessage
};
