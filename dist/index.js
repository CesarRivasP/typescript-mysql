"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
const server = server_1.default.init(3000);
server.app.use(router_1.default);
// Instancia de la base de datos
// const mysql = new MySQL(); Before
// MySQL.instance; //After with geter for instance
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});
// el comando tsc compila todos los archivos de typscript en proyecto y genera la carpeta de distribucion
