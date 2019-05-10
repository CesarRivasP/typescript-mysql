"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.connecting = false;
        console.log('Clase inicializada'); //Se sale mas de una vez, el patron singleton no esta funcionando
        // Para establecer la conexion
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });
        this.connectingDB();
    }
    connectingDB() {
        this.connection.connect((error) => {
            if (error) {
                console.log(error.message);
                return;
            }
            this.connecting = true;
            console.log('Base de datos MySQL online');
        });
    }
}
exports.default = MySQL;
