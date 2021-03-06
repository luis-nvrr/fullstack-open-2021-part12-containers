const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const redis = require("../redis");

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });

  let counterString = await redis.getAsync("added_todos");
  let counterNumber = Number(counterString);

  await redis.setAsync("added_todos", (counterNumber + 1).toString());

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  const todo = req.todo;
  res.json(todo); // Implement this
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const oldTodo = req.todo;
  const newTodo = { text: req.body.text, done: req.body.done };

  const updatedTodo = await Todo.findByIdAndUpdate(oldTodo._id, newTodo, {
    new: true,
  });
  if (!updatedTodo) {
    return res.status(404).end();
  }
  res.json(updatedTodo);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
