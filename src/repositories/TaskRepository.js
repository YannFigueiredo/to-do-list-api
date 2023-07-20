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
        let sql = "UPDATE tab_tasks SET "  
        let values = []
        
        if(task.title) {
            sql += "title=?, "
            values.push(task.title)
        }

        if(task.description) {
            sql += "description=?, "
            values.push(task.description)
        }
            
        if(task.status) {
            sql += "status=? "
            values.push(task.status)
        }
        
        sql = sql[sql.length - 2] === "," ? sql.slice(0, sql.length - 2) + " " : sql

        sql += "WHERE id=?"

        values.push(id)

        return await Database.connection.execute(sql, values)
    }

    async delete(id) {
        const sql = "DELETE FROM tab_tasks WHERE id=?"

        return await Database.connection.execute(sql, [id])
    }
}

export default new TaskRepository()