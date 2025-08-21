import multer from "multer"
import path, { dirname } from "path"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "thumbnail") {
      cb(null, path.join(__dirname, "public", "thumbnails"));
    } else if (file.fieldname === "video") {
      cb(null, path.join(__dirname, "public", "video_files"));
    } 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
    
  }
});

const upload = multer({ storage });
export default upload