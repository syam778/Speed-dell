
import mongoose from "mongoose";

const mongoURL = "mongodb://localhost:27017/person"
/*mongoose.connect(mongoURL,{
    useNewurlparser:true,
    useUnifiedtopology:true
})
    */
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error', err));

const db= mongoose.connection;

db.on('connection',() =>{
    console.log('connection to mongodb server');
});
db.on('disconnection',() =>{
    console.log('disconnection to mongodb server');
});
db.on('connection',(error) =>{
    console.log('connection to mongodb server error:',error);
})

export default db;
/*
import mongoose from "mongoose";

 export const connectDB = async () =>{
  await mongoose.connect(process.env.KK).then(()=>console.log("Db connected"));
}


const mongoURL = "mongodb://localhost:27017/person"
mongoose.connect(mongoURL,{
    useNewurlparser:true,
    useUnifiedtopology:true
})

const mongodb = mongoose.connection;

db.on('connection',() =>{
    console.log('connection to mongodb server');
});
db.on('disconnection',() =>{
    console.log('disconnection to mongodb server');
});
db.on('connection',(error) =>{
    console.log('connection to mongodb server error:',error);
})

module.exports = mongodb;

*/


//mongodb+srv://syama:Syama123@cluster0.cewg7.mongodb.net/speed-del
