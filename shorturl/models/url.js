import mongoose from 'mongoose'

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    visitHistory:[
        {timestamp:{type:Number}}
    ]
},
{timestamp:true}
)

const Url=mongoose.model("url",urlSchema)
export default Url;