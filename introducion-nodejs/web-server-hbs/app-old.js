
const http = require('http');

http.createServer( (req, res) => {


    res.writeHead(200, {'Content-Type': 'text/plain'});

    const persona = {
        id : 1,
        nombre: 'Ernesto Ledesma',
        direccion: 'Cdel u xxx'
    }

    res.write(JSON.stringify(persona));
    res.end();
  
})


.listen( 8081);

console.log('Escuchando en el puerto', 8081);