const express = require('express');

const friendsController = require('../controllers/friends');

const router = express.Router();

router.use((req, res, next) => {
  console.log('ip address: ', req.ip);
  next();
});

router.post('/', friendsController.postFriend);
router.get('/', friendsController.getFriends);
router.get('/:id', friendsController.getFriend);

module.exports = router;
