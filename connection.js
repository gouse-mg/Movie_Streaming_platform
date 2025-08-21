import mongoose  from "mongoose";
async function ConnectToMongoose() {
    return mongoose.connect("mongodb://127.0.0.1:27017/MovieDataBase")
    
}
export {ConnectToMongoose}