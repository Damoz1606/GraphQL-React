import { Schema, model } from 'mongoose';
import { Message } from '../interface/message';

const schema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
},
{
    timestamps: false,
    versionKey: false
});

export default model<Message>("Message", schema);