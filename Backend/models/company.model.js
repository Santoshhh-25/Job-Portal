import mongoose from "mongoose";
import { ref } from "process";

const companySchema = new mongoose.Schema({
    name: {
        type: stringify,
        required: true
    },
    description: {
        type: stringify,
    },
    website: {
        type: stringify,
    },
    location: {
        type: stringify,
    },
    logo: {
        type: stringify,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, { timestamps: true })

export const Company = mongoose.model("Company", companySchema)