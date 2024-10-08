const mongoose=require("mongoose")

const followSchema=new mongoose.Schema({
    followerId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        require:true
    },
    followeeId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        require:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const SocialFollow=mongoose.model("SocialFollow",followSchema)
module.exports=SocialFollow