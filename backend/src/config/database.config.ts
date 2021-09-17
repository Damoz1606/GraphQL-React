import mongoose from 'mongoose';

import config from './config';

const URL: string = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_CLUSTER}/${config.MONGO_NAME}?retryWrites=true&w=majority`;

export const connect = async () => {
    try{
        const res = await mongoose.connect(URL, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Mongo connection: ${res.connection.name}`);
    } catch (error: any){
        console.log("Something went wrong");
    }
}