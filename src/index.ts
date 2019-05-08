import Server from './server/server';
import router from './router/router';

const server = Server.init(3000);
server.app.use(router);


server.start(() => {
  console.log('Servidor corriendo en el puerto 3000')
});
// el comando tsc compila todos los archivos de typscript en proyecto y genera la carpeta de distribucion
