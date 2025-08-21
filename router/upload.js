import express from "express"
import  AddMovie from "../controller/add_movie.js"
import upload from "../multer.js";
const upload_router = express.Router()

upload_router.get('/',(req,res)=>{
    res.render("upload")
})
upload_router.post('/',upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "video", maxCount: 1 }
  ]),AddMovie)
// upload_router.post('/',upload("file"),AddMovie);

export default upload_router