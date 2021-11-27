const express = require("express");
const router = express.Router();
const redis = require("../redis");

const configs = require("../util/config");

let visits = 0;

router.get("/statistics", async (req, res) => {
  const countString = await redis.getAsync("added_todos");
  const countNumber = Number(countString);
  res.json({ counter: countNumber });
});

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

module.exports = router;
