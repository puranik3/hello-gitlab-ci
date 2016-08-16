var http = require( 'http' );

var server = http.createServer(function( req, res ) {
    res.end( 'hello, gitlab ci' );
});

var port = process.env.PORT || 3000;
server.listen( 3000, function( err ) {
    if( err ) {
        console.log( "error starting server. exiting..." );
        process.exit(1);
    }

    console.log( "started server. listening on port " + port );
});