var mongoose = require('mongoose')
const atlas = "mongodb+srv://jean:jeanpassword@cluster0-chvj2.azure.mongodb.net/abang?retryWrites=true&w=majority";
var mongoDB = 'mongodb://127.0.0.1/abang';
console.log("connecting");
mongoose.Promise = global.Promise;

mongoose.connect(atlas, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("database is connected!");
    }
});
