import Database from "../database/connection.js"

class TaskRepository {
    getAll() {
        const sql = "SELECT * FROM tab_tasks;"

        return new Promise((resolve, reject) => {
            Database.connection.query(sql, (error, result) => {
                if(error) return reject("Tasks não encontradas.")

                const row = JSON.parse(JSON.stringify(result))

                return resolve(row)
            })
        })
        .catch(error => console.error(error))
    }
}

export default new TaskRepository()