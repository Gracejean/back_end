var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var notify = new Schema({
  message: {type: String},
  date:{type:String},


},
  { collection: 'notifications' }
);

var Notify = mongoose.model('Notify', notify);

module.exports = Notify