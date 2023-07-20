import { Router } from "express"
import TaskController from "./controllers/TaskController.js"
import TaskMiddleware from "./middlewares/TaskMiddleware.js"

const router = Router()

router.get("/tasks", TaskController.listTasks)
router.get("/tasks/:id", TaskController.listTask)
router.post("/tasks", TaskMiddleware.validateTitle, TaskController.createTask)
router.patch("/tasks/:id", TaskMiddleware.validateStatus, TaskController.updateTask)
router.delete("/tasks/:id", TaskController.deleteTask)

export default router