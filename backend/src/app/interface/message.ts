import { Document } from "mongoose";

export interface Message extends Document {
    _id?:string
    title:string,
    content: string,
    author: string
}