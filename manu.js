import mongoose from "mongoose";
const manuSchema = new mongoose.Schema({
    name:{
        type:String,
        requirred:true
    },
    price:{
        type:Number,
        requirred:true
    },
    test:{
        type:String,
        requirred:true,
        enum:['sweet','spice','numkin','nurmal']
    },
    add_item:{
        type:String,
        requirred:true,
        default:[]
    },
    number_of_sales:{
        type:Number,
        requirred:true,
        default:[0]
    }


});
const manu = mongoose.model('manu',manuSchema)
export default manu;