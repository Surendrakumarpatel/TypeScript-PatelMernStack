import express from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo";

const router = express.Router();

router.route("/").post(createTodo) // create todo
router.route("/").get(getTodo) // get todo
router.route("/:todoId").patch(updateTodo) // update todo
router.route("/:todoId").delete(deleteTodo) // delete todo

export default router;
