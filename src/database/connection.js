import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

class Database {
    connection = mysql.createPool({
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE
    })

    createTable() {
        const sql = `CREATE TABLE IF NOT EXISTS tab_tasks (
                        id INT AUTO_INCREMENT,
                        title VARCHAR(100) NOT NULL,
                        description VARCHAR(500),
                        status ENUM('a fazer', 'em andamento', 'feito') NOT NULL,
                        PRIMARY KEY(id)
                    );`

        this.connection.execute(sql)
    }
}

export default new Database()