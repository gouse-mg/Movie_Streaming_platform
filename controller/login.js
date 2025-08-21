import Users from "../models/user.js"
// import login from "../models/login.js"
const secret_key = "Free Palestine"
import jwt from "jsonwebtoken";
async function LoginTheUser (req,res){
   
    
    const fetched_user = await Users.findOne({ email:req.body.email });
    // res.end(req.ip);
    if (fetched_user){
        const password =  fetched_user.password
        if (password == req.body.password){
            
            //send user its cookie 
            const token = jwt.sign({
                uid:fetched_user._id,
                username:fetched_user.username,
                email:fetched_user.email,
                subscribedTo:fetched_user. subscribedTo,
                subscribers:fetched_user.subscribers,
                videos_uploaded:fetched_user.videos_uploaded
            },secret_key)
            console.log(token)
           res.cookie('user', token);
           res.redirect("/home")
        }
        else{
            res.send("wrong password!!")
            
        }
    }
    else{
        res.send("you are not registerd ")
    }

}
async function RegisterTheUser(req,res) {
    const existing_user = await Users.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.email }
            ]
        });

    console.log(existing_user)
    if (existing_user){
        return res.render("register", { error: "Email or username is already taken!" });
    }
    await Users.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
   res.redirect('/login');
}
export { LoginTheUser,RegisterTheUser}