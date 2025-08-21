
import Users from "../models/user.js"
function HandleAccount(req,res){
    // console.log(req.user)
   res.render('account',{user:req.user});
}
export default HandleAccount