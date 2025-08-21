import Users from "../models/user.js"
import Movies from "../models/movies.js"
import path from "path"
import multer from "multer";

async function AddMovie(req,res) {
    const name = req.body.moviename
    const thumbnail = `/thumbnails/${req.files.thumbnail[0].filename}`;
    const video = `/video_files/${req.files.video[0].filename}`;
    try {
    const user = req.user;

    const movie = await Movies.create({
        moviename: name,
        thumbnail: thumbnail,
        video: video,
        uploaded_by: user.uid
    });
    await Users.findByIdAndUpdate(
    req.user.uid,
    { $push: { videos_uploaded: movie._id } }  
);

    // movie is the created document
    res.redirect('/home/account');  // Pass an object to the template

} catch (err) {
    res.status(400).json({ error: err.message });
}
    
}



export default AddMovie