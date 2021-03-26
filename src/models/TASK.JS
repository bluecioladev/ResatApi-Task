//import mongoose from 'mongoose';
//new mongoose.Schema();
import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trin: true
    },
    description: {
        type: String,
        trin: true
    },
    done: {
        type: Boolean,
        default: false
    },

}, {
    versionKey: false,
    timestamps: true

});

export default model('Task', taskSchema);

