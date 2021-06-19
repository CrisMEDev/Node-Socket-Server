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

        // Sockets
        this.sockets();
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

    sockets(){

        this.io.on( 'connection', socket => {
            // console.log('Cliente conectado', socket.id);

            // socket.on('disconnect', () => {
            //     console.log('Cliente desconectado');
            // });


            // Callback a ejecutar cuando se escuchar el 'enviar-mensaje' del cliente
            // El payload contiene la data que envia el cliente
            socket.on('enviar-mensaje', ( payload, callback ) => {

                // El nombre del emit puede ser cualquiera; simplemente se uso el mismo nombre que se usó en el cliente por simplicidad
                this.io.emit( 'enviar-mensaje', payload );

                const id = 123456123;
                // Se llama a el callback que se tiene desde el lado del cliente para su ejecución
                callback({ id, fecha: new Date().getTime() });

            });

        });

    }

    listen(){
        // Se levantar la instancia server en lugar de app
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en le puerto: ', this.port);
        });
    }

}


module.exports = Server;