// const datos = require('./datos');

// datos("Hola mundo");

// // console.log(module);

const path = require('path');

const objPath = path.parse(__filename);

console.log(objPath.name);

const os = require('os');

const memoriaLibre = os.freemem();
const memoriaTotal = os.totalmem();

console.log(`Memoria libre ${memoriaLibre}`);
console.log(`Memoria total ${memoriaTotal}`);

const fs = require('fs');

const archivos = fs.readdirSync('./');
console.log(archivos);

fs.readdir('./', function(err, files){
    if(err) console.log("Error", err);
    else console.log("Archivos", files);
});

// MÓDULO DE EVENTOS
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Registrar el Listener
emitter.on('mensajeLogger', (arg)=>{
    console.log('Listener llamado...', arg);
});
//Registrar el evento
emitter.emit('mensajeLogger', {id:1, url:'http://prueba.com'});

//MÓDULO HTTP
const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hola mundo!!!');
        res.end();
    }

    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['mouse', 'teclado', 'micrófono']));
        res.end();
    }
});

// server.on('connection', (puerto)=>{
//     console.log("Nueva conexión..."+puerto);
// });

server.listen(3000);

console.log('Servidor escuchando en el pueto 3000');

