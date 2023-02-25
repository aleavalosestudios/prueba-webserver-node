const http =require('http');

http.createServer( (request, response) =>{

    console.log(request);
    
    //response.writeHead( 200, {'Content-Type': 'application/json'} )
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // response.writeHead( 200, {'Content-Type': 'application/csv'} )
    
    // response.write('id,nombre\n');
    // response.write('1, Fernando\n');
    // response.write('2, Carmen\n');
    // response.write('3, Luis\n');
    // response.write('4, Pedro\n');

    // response.end();
} )

.listen(8080);

console.log('Escuchando en el puerto', 8080);
