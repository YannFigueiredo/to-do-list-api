import TaskRepository from "../repositories/TaskRepository.js"

class TaskController {
    async listTasks(req, res) {
            const result = await TaskRepository.getAll()
    
            if(result) {
                res.status(200).json(result)   
            } else {
                res.status(404).json({msg: "Tasks não encontradas."})
            }
    }    
}

export default new TaskController()