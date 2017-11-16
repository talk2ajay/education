const userController=module.exports;
const User=require('../models/Users');

userController.addUser=(req,res)=>{
  let user= new User();
    _.assign(user,req.body);
    user.save();
  res.sendStatus(200);
}
