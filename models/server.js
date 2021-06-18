const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;

        // Agregando socket.io
        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')( this.server );

        this.paths = {
            
        }

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use( cors() );

        // Directorio público
        this.app.use( express.static('public') );

    }

    routes(){
        // Se usa un middleware para cargar ciertas rutas dependiendo de una ruta inicial
        // Ejemplo: this.app.use( this.paths.auth,       require('../routes/auth') );
    }

    listen(){
        // Se levantar la instancia server en lugar de app
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en le puerto: ', this.port);
        });
    }

}


module.exports = Server;