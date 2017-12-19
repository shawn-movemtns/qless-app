var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//TODO: Location model needs to be developed out based on the Location schema provided
module.exports = mongoose.model('Location', new mongoose.Schema({
    name: String,
    description: String
}));