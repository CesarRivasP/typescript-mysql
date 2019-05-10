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
    // -- geters and seters --
    // geter para obtener la instancia
    static get instance() {
        // SI existe, regresa la instancia, sino, this._instance = new this(), que va a crear una nueva conexion.
        // Si no existe, va a llamar al constructor para que cree la instancia, y eso se va a almacenar en la instancia
        return this._instance || (this._instance = new this());
        // Asi va establecer que cuando se llame muchas veces al get instance, siempre se utilice la misma instancia definida
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
