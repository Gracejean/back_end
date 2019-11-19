var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var property = new Schema({
  location: {type:String},
  details: {type:String},
  title: {type:String},
  price: {type:String}

},  
  { collection: 'property' }
);

var Property = mongoose.model('Property', property)

module.exports = Property