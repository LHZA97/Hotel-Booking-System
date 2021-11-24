import Guests from "../models/Guest.Model.js";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";
import pkg from "sequelize";
//import { body, validationResult} from 'express-validator'

export const getGuests = async(req,res) => {
    try {
        const guests = await Guests.findAll({
            attributes:['id','name','email']
        });
        res.json(guests);
    } catch (error) {
        console.log(error);
    }
}

export const register = async(req,res)=>{
    const {name, email, contact, password, confPassword} = req.body;
    const {Op} = pkg
    
    const count = await Guests.findAndCountAll({
        where: {
            email: {
                [Op.like]: email
            }
        },
        limit: 1
    })
    const countEmail = count.count
   
    if(password !== confPassword) return res.status(400) //.json({msg: "Password not match!"});
    else if(password.length < 10) return res.status(400) //.json({msg: "Please put more than 10 words or numbers!"});
    else if(contact.length < 10) return res.status(400) //.json({msg: "Please put the correct contact number"});
    else if(!/\S+@\S+\.\S+/.test(email)) return res.status(400) //.json({msg: "Invalid email address"})
    else if(!(email && name && password && confPassword )) return res.status(400) //.json({msg: "Please fill in the details"})
    else if(countEmail > 0) return res.status(400).json({msg: "Email already exist"})
    
    
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);
    try {
        await Guests.create({
            name: name,
            email: email,
            contact: contact,
            password: hashPassword
        });
        console.log(name)
        res.status(200).json({msg: "You have successfully registered! Please login."})
    } catch(error){
        console.log(error);
    }
    
}

export const login = async(req, res, next)=>{
    try{
        const guest = await Guests.findAll({
            where:{
                email: req.body.email
            }
        });
        
        const match = await bcrypt.compare(req.body.password, guest[0].password);
        if(!match) return res.status(400).json({msg:"Wrong Password"});
        
        const userID = guest[0].id;
        const name = guest[0].name;
        const email = guest[0].email;

        const accessToken = jwt.sign({userID, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userID, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Guests.update({refresh_token: refreshToken}, {
            where:{
                id: userID
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60* 1000
        });
        res.json({accessToken})
        
        next()
    } catch(error){
        res.status(404).json({msg:"Email doesn't exist"})
    }
}

export const logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const guest = await Guests.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!guest[0]) return res.sendStatus(204);
    const userID = guest[0].id;
    await Guests.update({refresh_token: null},{
        where:{
            id: userID
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}