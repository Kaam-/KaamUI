module.exports = (function() {
    var util = require('../util');
    var self = {};
    util.mixWith(self, require('./Controller.js'));

    self.debug = function() {
        console.log('Hi from UserController.');
    }

    // Overload
    self.handleRequest = function(request, response) {
        if(request.method === 'GET') {
            response.writeHead(200, {"Content-Type":"text/json"});
            var User = require('../models/UserModel');
            var testUser = new User({'FirstName': "Sam",
                                     'LastName': "Kiswani",
                                     'Email': 'ssk09c@my.fsu.edu'});
            var res = JSON.stringify(testUser.toObject(), null, 3);
            response.write(res);
            response.end();
        }
    };

    return self;
})();