import { Router } from "express";
import TaskController from "./controllers/TaskController.js";

const router = Router()

router.get("/tasks", TaskController.listTasks)

export default router