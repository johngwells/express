const friends = require('../model/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name'
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name
  };
  friends.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  // console.log(friends)
  // const friendsList = friends.map(friend => friend.name)
  res.render('friends', {
    data: friends
  })
  // res.json(friends);
}

function getFriend(req, res) {
  const id = Number(req.params.id);
  const friend = friends[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
}

module.exports = {
  postFriend,
  getFriend,
  getFriends
};
