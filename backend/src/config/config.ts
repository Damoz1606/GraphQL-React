import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_NAME: process.env.MONGO_NAME || "test",
    MONGO_CLUSTER: process.env.MONGO_CLUSTER || "localhost",
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    PORT: process.env.PORT || 4000
}