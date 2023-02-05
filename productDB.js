require("dotenv").config();
const connectDB=require('./db/connect');
const data=require('./students.json');
const Product=require('./models/m1')
const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      await Product.deleteMany();
      await Product.create(data)
      console.log("Data Insertion Success!!")
    } catch (error) {
      console.log("error at---------------------->",error)
    }
  }
  start();
// console.log(JSON.stringify(file))