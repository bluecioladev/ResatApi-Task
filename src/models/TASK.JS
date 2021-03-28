//import mongoose from 'mongoose';
//new mongoose.Schema();
import { Schema, model } from "mongoose";
import mongoosePaginate  from "mongoose-paginate-v2";

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
taskSchema.plugin(mongoosePaginate);
export default model('Task', taskSchema);

