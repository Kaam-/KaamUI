var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    fkUser: ObjectID,
    fkGoal: ObjectID,
    fkParent: ObjectID,
    recurringTask: Boolean,
    Name: String,
    DateCreated: { type: Date, default: Date.now },
    EndDate: Date,
    DateCompleted: Date,
    LastUpdated: { type: Date, default: Date.now },
});

taskSchema.virtual('pkTask').get(function() {
    return this._id;
});


module.exports = mongoose.model('Task', taskSchema);