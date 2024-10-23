import mongoose from "mongoose";

export async function dbConnect(){
    try {
        const connect = await mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING));
        return connect;
    } catch(err) {
        console.error(err);
    }
}