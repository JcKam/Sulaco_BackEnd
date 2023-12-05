const express = require("express");
const router = express.Router();

const WCAG = require("../models/WCAG");

router.get("/WCAG", async (req, res) => {
  try {
    const user = new WCAG({
      title: req.body.title,
      level: req.body.level,
      version: req.body.version,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
