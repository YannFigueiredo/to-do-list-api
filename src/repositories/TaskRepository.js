import Database from "../database/connection.js"

class TaskRepository {
    create(task) {
        const sql = "INSERT INTO tab_tasks SET ?;"

        return Database.processConsult(sql, task, "Tarefa não criada.")
    }

    getAll() {
        const sql = "SELECT * FROM tab_tasks;"

        return Database.processConsult(sql, "Tarefas não encontradas.")
    }

    getById(id) {
        const sql = "SELECT * FROM tab_tasks WHERE id=?;"

        return Database.processConsult(sql, id, "Tarefa não encontrada.")
    }

    update(id, task) {
        const sql = "UPDATE tab_tasks SET ? WHERE id=?;"

        return Database.processConsult(sql, [id, task], "Tarefa não atualizada.")
    }

    delete(id) {
        const sql = "DELETE FROM tab_tasks WHERE id=?;"

        return Database.processConsult(sql, id, "Tarefa não deletada.")
    }
}

export default new TaskRepository()