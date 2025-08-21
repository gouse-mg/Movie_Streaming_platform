import express from "express"

import {LoginTheUser} from "../controller/login.js"

const login_router = express.Router()
login_router.get('/',(req,res)=>{
    res.render("login")
})
login_router.post('/',LoginTheUser);

export default login_router