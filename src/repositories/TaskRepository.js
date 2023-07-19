import Database from "../database/connection.js"

class TaskRepository {
    async create(task) {
        const { title, description, status } = task;
        const sql = "INSERT INTO tab_tasks(title, description, status) VALUES(?, ?, ?)"

        return await Database.connection.execute(sql, [title, description, status])
    }

    async getAll() {
        const sql = "SELECT * FROM tab_tasks"

        const [tasks] = await Database.connection.execute(sql)

        return tasks
    }

    async getById(id) {
        const sql = "SELECT * FROM tab_tasks WHERE id=?"

        const [task] = await Database.connection.execute(sql, [id])

        return task
    }

    async update(id, task) {
        const { title, description, status } = task;
        const sql = "UPDATE tab_tasks SET title=?, description=?, status=? WHERE id=?"     

        return await Database.connection.execute(sql, [title, description, status, id])
    }

    async delete(id) {
        const sql = "DELETE FROM tab_tasks WHERE id=?"

        return await Database.connection.execute(sql, [id])
    }
}

export default new TaskRepository()