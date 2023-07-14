import mysql from "mysql"

class Database {
    connection = mysql.createConnection({
        user: "root",
        password: "admin",
        host: "localhost",
        port: "3306",
        database: "db_todolist"
    })

    createConnection() {
        this.connection.on("error", (error) => {
            console.error("Erro ao estabelecer a conexão: ", error)
        })

        this.connection.connect((error) => {
            if(error)  {
                console.error("Erro ao estabelecer a conexão com o banco de dados: ", error)
            } else {
                console.log("Conexão com o banco de dados estabelecida com sucesso.")
            }
        })        
    }

    processConsult(sql, data = "", msgError) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, data, (error, result) => {
                if(error) return reject(msgError)

                const row = JSON.parse(JSON.stringify(result))

                return resolve(row)
            })
        })
        .catch(error => console.error(error))
    }
}

export default new Database()