var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//TODO: Merchant model needs to be developed out based on the Merchant schema provided
module.exports = mongoose.model('Merchant', new mongoose.Schema({
    name: String,
    description: String
}));