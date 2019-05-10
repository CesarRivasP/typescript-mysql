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
