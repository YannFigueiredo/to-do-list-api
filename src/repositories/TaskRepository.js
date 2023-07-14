import Database from "../database/connection.js"

class TaskRepository {
    create(task) {
        const sql = "INSERT INTO tab_tasks SET ?;"

        return new Promise((resolve, reject) => {
            Database.connection.query(sql, task, (error, result) => {
                if(error) return reject("Tasks não criada.")

                const row = JSON.parse(JSON.stringify(result))

                return resolve(row)
            })
        })
        .catch(error => console.error(error))
    }

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

    getById(id) {
        const sql = "SELECT * FROM tab_tasks WHERE id=?;"

        return new Promise((resolve, reject) => {
            Database.connection.query(sql, id, (error, result) => {
                if(error) return reject("Task não encontrada.")

                const row = JSON.parse(JSON.stringify(result))

                return resolve(row)
            })
        })
        .catch(error => console.error(error))
    }

    update(id, task) {
        const sql = "UPDATE tab_tasks SET ? WHERE id=?;"

        return new Promise((resolve, reject) => {
            Database.connection.query(sql, [task, id], (error, result) => {
                if(error) return reject("Task não atualizada.")

                const row = JSON.parse(JSON.stringify(result))

                return resolve(row)
            })
        })
        .catch(error => console.error(error))
    }

    delete(id) {
        const sql = "DELETE FROM tab_tasks WHERE id=?;"

        return new Promise((resolve, reject) => {
            Database.connection.query(sql, id, (error, result) => {
                if(error) return reject("Task não deletada.")

                const row = JSON.parse(JSON.stringify(result))

                return resolve(row)
            })
        })
        .catch(error => console.error(error))
    }
}

export default new TaskRepository()