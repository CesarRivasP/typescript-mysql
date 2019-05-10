import mysql = require('mysql');

export default class MySQL {
  // Implementacion del patron singleton
  // Se debe manejar la unica instancia de la clase de forma privada dentro de la clase
  // con este patron se pretende evitar que se tengan multiples intancias de multiples cadenas de conexion corriendo
  private static _instance: MySQL;

  connection: mysql.Connection;
  connecting: boolean = false;

  constructor(){
    console.log('Clase inicializada'); //Se sale mas de una vez, el patron singleton no esta funcionando

    // Para establecer la conexion
    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'node_user',
      password : '123456',
      database : 'node_db'
    });

    this.connectingDB()
  }

  // -- geters and seters --

  // geter para obtener la instancia
  public static get instance(){
    // SI existe, regresa la instancia, sino, this._instance = new this(), que va a crear una nueva conexion.
    // Si no existe, va a llamar al constructor para que cree la instancia, y eso se va a almacenar en la instancia
    return this._instance || (this._instance = new this());
    // Asi va establecer que cuando se llame muchas veces al get instance, siempre se utilice la misma instancia definida
  }

  private connectingDB(){
    this.connection.connect((error: mysql.MysqlError) => {
      if(error){
        console.log(error.message);
        return;
      }

      this.connecting = true;
      console.log('Base de datos MySQL online');
    })
  }
}
