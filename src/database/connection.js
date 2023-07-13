import mysql from "mysql"

class Database {
    async createConnection() {
        const connection = await mysql.createConnection({
            user: "root",
            password: "admin",
            host: "localhost",
            port: "3306",
            database: "db_todolist"
        })

        connection.on("error", (error) => {
            console.error("Erro ao estabelecer a conexão: ", error)
        })

        await connection.connect((error) => {
            if(error)  {
                console.error("Erro ao estabelecer a conexão com o banco de dados: ", error)
            } else {
                console.log("Conexão com o banco de dados estabelecida com sucesso.")
            }
        })        
    }
}

export default new Database()