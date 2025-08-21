import express from "express"
import HandleHomePage from "../controller/home.js"
import HandleAccount from "../controller/account.js"
const HomePageRouter = express.Router()

HomePageRouter.get('/',HandleHomePage)
HomePageRouter.get('/account',HandleAccount)
export default HomePageRouter