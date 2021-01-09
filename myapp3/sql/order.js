const db = require('./db.js')

const order = new db.mongoose.Schema({
    "username":{type:String},
    "gender":{type:String},
    "age":{type:Number},
    "grade":{type:String}
})


module.exports = db.mongoose.model("order",order)