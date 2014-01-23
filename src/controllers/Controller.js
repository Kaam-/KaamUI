module.exports = (function() {
    var self = {};

    self.debug = function() {
        console.log("Hello from DefaultController");
    };

    self.handleRequest = function(request, response) {
        response.writeHead(200, {"Content-Type":"text/json"});
        response.write("Welcome!");
        response.end();
    };

    return self;
})();