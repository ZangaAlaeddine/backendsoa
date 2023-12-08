const mongoose = require('mongoose')
 
exports.connectToDb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/gestion-des-evenements")
        console.log("connected");
    } catch (error) {
        console.log("error");
    }
}