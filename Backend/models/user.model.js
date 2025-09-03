import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password:{
        type:string,
        required:true,
        unique:true
    },
    role:{
        type:string,
        enum:['student', 'recruiter'],
        required:true
    },
    profile:{
        bio:{
            type:string,
            skills:[{type:string}],
            resume:{type:string}  ,  //url
            resumeOriginalName:{type:string},
            company:{type:mongoose.Schema.Types.ObjectId, ref:"Company"},
            profilePhoto:{type:string, default:"l̥"}
        },
    }
}, {timestamps:true});

export const User = mongoose.model("User", userSchema)