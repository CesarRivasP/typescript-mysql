import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use(router);


// Instancia de la base de datos
// const mysql = new MySQL(); Before
// MySQL.instance; //After with geter for instance

server.start(() => {
  console.log('Servidor corriendo en el puerto 3000')
});
// el comando tsc compila todos los archivos de typscript en proyecto y genera la carpeta de distribucion
