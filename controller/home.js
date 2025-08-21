function HandleHomePage(req,res){
   res.render("home",{user:req.user});
}
export default HandleHomePage