const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/Users", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      password: req.body.password,
      job: req.body.job,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
