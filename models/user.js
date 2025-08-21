import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true   
    },
    password: {
        type: String,
        required: true   
    },
    subscribedTo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"  
        }
    ],
    subscribers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    videos_uploaded: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movies"
        }
    ]
});

const Users = mongoose.model('Users', UserSchema);


export default Users