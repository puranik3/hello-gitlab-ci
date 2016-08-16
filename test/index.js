var expect  = require("chai").expect;
var request = require("request");

var baseUrl = 'http://localhost:3000/';

describe('Hit server URL', () => {
    it('it should respond with "hello, gitlab ci', function( done ) {
        request(baseUrl, function( error, response, body ) {
            expect(response.body).to.equal( 'hello, gitlab ci' );
            done();
        });
    });
});