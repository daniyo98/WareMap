const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemsSchema = new Schema({
    id:{
        type:Number,
        require: true,
        default: 0
    },
    name:{
        type: String,
        require: true
    },
    description:{
        type: String
    },
    userId:{
        type:Number,
        require: true
    },
    price:{
        type:Number,
        require: true
    }
});
const items = mongoose.model('items', itemsSchema);
module.exports = items;