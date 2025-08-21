import express from "express"
import {RegisterTheUser} from "../controller/login.js"

const register_router = express.Router()
register_router.post('/',RegisterTheUser);
register_router.get('/',(req,res)=>{
    res.render("register")
})


export default register_router