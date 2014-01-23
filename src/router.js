var defaultController = require('./controllers/Controller.js');
var userController = require('./controllers/UserController.js');

module.exports = (function() {
    var self = {};

    var route = function(path) {
        var slug = path.split('/');
        slug.shift();
        return slug;
    };

    var getController = function(path) {
        var slug = path.split('/');
        slug.shift();

        switch(slug[0]) {
            default:
                return defaultController;
                break;
            case 'user':
                return userController;
                break;
        }
    }

    self.route = route;
    self.getController = getController;

    return self;
})();