
// Referencias al html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');


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

