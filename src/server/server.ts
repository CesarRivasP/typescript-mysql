import express = require('express');

// Clase para manejar el servidor de manera que se pueda reutilizar el codigo facilmente
export default class Server {
  public app: express.Application;  // Implementa los metodos de express
  public port: number;

  constructor(port: number){
    //cuando se establezca una nueva instancia del server se va a requerir el puerto
    this.port = port;
    this.app = express();
  }

  static init(port: number){
    // ES un metodo estatico es porque se quiere que este sea el metodo que se llame. Esto va a disparar el constructor
    // e inicializa todo. La idea es que solo se tenga una instancia de express corriendo, siempre que se utilice express
    // se va a inicializar con 'init', y siempre se va a usar la misma instancia
    return new Server( port);
  }

  // PAra que empiece a escuchar
  start(callback: Function){
    this.app.listen(this.port, callback);
  }
}


// Archivos de definicion typescript, que es lo que ayuda a typescript a saber que metodos y funciones tiene
