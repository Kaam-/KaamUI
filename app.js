var server = require("./src/server");
var router = require("./src/router");

/** HOW-TO DATABASE **/
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("we have a db!");
//     var User = require('./src/models/UserModel.js');
//     var testUser = new User({'FirstName': "Sam",
//                              'LastName': "Kiswani",
//                              'Email': 'ssk09c@my.fsu.edu'});
//     console.log(testUser.getName() + " with email " + testUser.Email + " with id " + testUser.pkUser);
// });

server.start(router, 8888);










