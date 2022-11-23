const router = require('express').Router();
const { Test, User } = require('../db/models');

router.route('/').get(async (req, res) => {
  // const test = await Test.findAll();
  const user = await User.findAll();
  res.json({ example: user });
});

module.exports = router;
