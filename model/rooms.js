var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var rooms = new Schema({
    room_number: {type: String},
    num_occupants:{type:String},
    description:{type:String},
    price:{type:String}
},
  { collection: 'rooms' }
);

var Rooms = mongoose.model('Rooms', rooms);

module.exports = Rooms