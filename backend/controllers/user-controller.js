import User from "../model/User.js";
import bcrypt from 'bcryptjs'

export const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"no user found!!"});
    }
    return res.status(200).json({users});
}

export const signup = async(req, res, next) => {
    const {name, email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email}) 
    }catch(err){
        return console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message: "User Already Exist! Login Instead"})
    }
    const hashedpassword = bcrypt.hashSync(password);

    const user = new User({
        name, email, password: hashedpassword, blogs: []
    })

    try{
        await user.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(200).json({user})
}

export const login = async(req, res, next) =>{
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email}) 
    }catch(err){
        return console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({message: "User Does Not Found"})
    }
    const hashedpassword = bcrypt.hashSync(password);

    const isPasswordCorredt = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorredt){
        return res.status(400).json({message: "Password Mismatch!"})
    }
    return res.status(200).json({message:"Login Successfully", user: existingUser})
}
