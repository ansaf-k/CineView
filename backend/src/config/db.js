import {mongoose} from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();


const connectDB = async () => {
    console.log(process.env.MONGO_URL);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb Connected:${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;