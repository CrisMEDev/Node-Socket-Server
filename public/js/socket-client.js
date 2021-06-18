
// Referencias al html
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

// socket del cliente que se comunica con el server
const socket = io();


// Al dispararse este evento como su nombre lo indica;
// se dispara cuando se tiene una conexión al server
socket.on('connect', () => {
    console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');

    lblOffline.style.display = '';
    lblOnline.style.display  = 'none';
});


btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123ABC',
        date: new Date().getTime()
    }

    // Enviar mensaje al servidor
    socket.emit( 'enviar-mensaje', payload );

});

