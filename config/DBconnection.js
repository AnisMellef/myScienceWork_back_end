const mongoose=require('mongoose');
require('dotenv').config();

const mongo=process.env.MONGO_URI;
const DBconnection=async()=>{
    try{
    await mongoose.connect(mongo);
    console.log('you are now connected to the database');
    }catch(err){
        console.log(err);
    }
}

module.exports=DBconnection;