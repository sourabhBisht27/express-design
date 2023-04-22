var express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const Todo = require("../models/Todo");
const handleErrors = require("../middlewares/handleErrors");
var router = express.Router();

/* GET home page. */
router.get("/", isAuthenticated, async function (req, res, next) {
  try {
    const todosCompletedCount = await Todo.count({
      UserEmail: req.session.user.email,
      completed: true,
    });
    const todosNotCompletedCount = await Todo.count({
      UserId: req.session.user.email,
      completed: false,
    });
    return res.render("index", {
      title: "Landing-Todo",
      user: req.session.user,
      dashboard: { todosCompletedCount, todosNotCompletedCount },
    });
  } catch (error) {
    handleErrors(req, res, next);
  }
});

router.get("/todos", isAuthenticated, async function (req, res, next) {
  try {
    const todos = await Todo.findAll({
      UserEmail: req.session.user.email,
    });
    return res.render("todos", {
      title: "Todos - List",
      user: req.session.user,
      todos,
    });
  } catch (error) {
    handleErrors(req, res, next);
  }
});

router.post("/todos", isAuthenticated, async function (req, res, next) {
  try {
    const newTodo = await Todo.create({
      ...req.body,
      UserEmail: req.session.user.email,
    });
    return res.status(201).send(newTodo);
  } catch (error) {
    handleErrors(req, res, next);
  }
});
module.exports = router;
