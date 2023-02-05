const mongoose=require('mongoose')
mongoose.set('strictQuery', false);
const connectDB=(uri)=>{
    console.log("I am connected to database")
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};
module.exports=connectDB;

