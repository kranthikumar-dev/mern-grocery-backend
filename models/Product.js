
const mongoose = require("mongoose")

const Category_Enum = [
    "vegetables", "fruits", "food-grains"
]
const Unit_Enum = [
    "500g", "1kg", "2kgs", "5kgs"
]

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    category:{
        type:String,
        value:Category_Enum
    },
    unit:{
        type:String,
        value:Unit_Enum
    },
    image:{
        type:String
    },
    isActive:{
        type:Boolean
    }
}, {timestamps:true})

module.exports = mongoose.model("Product", productSchema)