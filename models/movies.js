import mongoose from "mongoose";
const MovieSchema = new mongoose.Schema({
    moviename: {
        type :String,
        required : true
    },
    thumbnail:{
        type : String,
        require:true
    },
    video:{
        type:String,
        require:true
    },
    uploaded_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"   // 👈 tell mongoose this ObjectId references the "users" collection
  },
  ratings:{
    type:Number
  }
  
    
})
const Movies = mongoose.model('Movies', MovieSchema);


export default Movies