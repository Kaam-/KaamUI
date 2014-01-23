var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    FirstName : String,
    LastName : String,
    AvatarUrl : String,
    Username : String,
    Password : String,
    Email : String,
    StarCount : Number,
    StarsEarned : Number,
    StarsSpent : Number,
    DateCreated : { type: Date, default: Date.now },
    LastUpdated : { type: Date, default: Date.now }
}, { collection: 'data'});

userSchema.set('toJSON', {getters: true, virtuals: true});

userSchema.methods.getName = function() {
    return this.FirstName + " " + this.LastName;
};

userSchema.virtual('pkUser').get(function() {
    return this._id;
});


module.exports = mongoose.model('User', userSchema);