

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });


    // Callback a ejecutar cuando se escuchar el 'enviar-mensaje' del cliente
    // El payload contiene la data que envia el cliente
    socket.on('enviar-mensaje', ( payload, callback ) => {

        // El nombre del emit puede ser cualquiera; simplemente se uso el mismo nombre que se usó en el cliente por simplicidad
        
        socket.broadcast.emit( 'enviar-mensaje', payload );

        const id = 123456123;
        // Se llama a el callback que se tiene desde el lado del cliente para su ejecución
        callback({ id, fecha: new Date().getTime() });

    });

}

module.exports = {
    socketController
}

