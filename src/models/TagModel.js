var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    fkUser: ObjectID,
    Name: String
});

tagSchema.virtual('pkTag').get(function() {
    return this._id;
});

module.exports = mongoose.model('Tag', tagSchema);