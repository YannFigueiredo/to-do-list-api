import TaskRepository from "../repositories/TaskRepository.js"

class TaskController {
    async createTask(req, res) {
        const task = req.body

        const result = await TaskRepository.create(task)

        if(result) {
            res.status(201).json(result)
        } else {
            res.status(400).json({errorMsg: "Task não criada."})
        }
    }

    async listTasks(req, res) {
            const result = await TaskRepository.getAll()
    
            if(result) {
                res.status(200).json(result)   
            } else {
                res.status(404).json({errorMsg: "Tasks não encontradas."})
            }
    }
    
    async listTask(req, res) {
        const id = req.params.id

        const result = await TaskRepository.getById(id)

        if(result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({errorMsg: "Task não encontrada."})
        }
    }

    async updateTask(req, res) {
        const id = req.params.id
        const task = req.body

        const result = await TaskRepository.update(id, task)

        if(result) {
            res.status(200).json(result)
        } else {
            res.status(400).json({errorMsg: "Task não atualizada."})
        }
    }

    async deleteTask(req, res) {
        const id = req.params.id

        const result = await TaskRepository.delete(id)

        if(result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({errorMsg: "Task não deletada."})
        }
    }
}

export default new TaskController()