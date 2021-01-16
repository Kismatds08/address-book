const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    name:{
        type: String,
        
    },
    email : {
        type: String,
        
    },
    phone: {
        type: Number,
        
    },
    place: {
        type: String,
        
    },
});

//creating collection address
const Address = mongoose.model('Address', addressSchema)

module.exports = Address;