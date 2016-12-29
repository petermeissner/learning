// www.tutorialspoint.com/nodejs/nodejs_first_application.htm

var http = require("http");

http.createServer(
    function(request, response){
        // send header 200 - ok 
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        // time stamp
        var now = new Date().toISOString()

        // content
        response.end(
         '<!DOCTYPE html>' +
         '<html>' +
         //'<head><meta http-equiv="refresh" content="10"><head>' +
         '<body>'+ now +'\n</body>' +
         '</html>'
        );
    }
).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

