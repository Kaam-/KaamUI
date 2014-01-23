var http = require('http');
var url = require('url');

function start(router, port) {
    function onRequest(request, response) {
        console.log("REQ { path: " + request.url + " method: " + request.method + " }");

        var pathname = url.parse(request.url).pathname;
        var controller = router.getController(pathname);

        controller.debug();
        controller.handleRequest(request, response);

        /*
            response.writeHead(200, {"Content-Type":"text/html"});
            var jade = require('jade');
            var html = jade.renderFile('./src/views/index.jade', {'youAreUsingJade' : true});
            response.write(html);
        */
    }

    http.createServer(onRequest).listen(port);
    console.log("Server has started on port " + port);
}

exports.start = start;