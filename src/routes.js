import { Router } from "express";
import TaskController from "./controllers/TaskController.js";

const router = Router()

router.get("/tasks", TaskController.listTasks)
router.get("/tasks/:id", TaskController.listTask)
router.post("/tasks", TaskController.createTask)
router.put("/tasks/:id", TaskController.updateTask)
router.delete("/tasks/:id", TaskController.deleteTask)

export default router