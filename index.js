import express from "express"
import { ConnectToMongoose } from "./connection.js"
import login_router from "./router/login.js";
import register_router from "./router/register.js";
import upload_router from "./router/upload.js";
import AuthenticateTheUser from "./middlewares/authenticate.js";
import ejs from "ejs"
import path, { dirname } from "path"
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
// import HandleHomePage from "./controller/home.js";
import HomePageRouter from "./router/home.js";
import cors from "cors";
import multer from "multer"

// Recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()

const upload = multer({dest:path.join(__dirname,"public","")})


app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(cors());








app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true);
app.use('/login',login_router)
app.use('/',register_router)
app.use('/home',AuthenticateTheUser,HomePageRouter)
app.use("/upload",AuthenticateTheUser,upload_router)

ConnectToMongoose();
app.listen(8000);


export { app, __dirname };