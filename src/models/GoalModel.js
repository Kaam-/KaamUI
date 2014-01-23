var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goalSchema = new Schema({
    fkUser : ObjectID,
    Name : String,
    DateCreated : { type: Date, default: Date.now },
    EndDate : Date,
    DateCompleted : Date,
    LastUpdated: { type: Date, default: Date.now },
    GroupGoal : Boolean,
    EventOrTime : Boolean,
    Stars : Number
});

goalSchema.virtual('pkGoal').get(function() {
    return this._id;
});


module.exports = mongoose.model('Goal', goalSchema);