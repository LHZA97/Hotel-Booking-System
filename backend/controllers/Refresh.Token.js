import Guests from "../models/Guest.Model.js";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        console.log(refreshToken);
        if(!refreshToken) return res.sendStatus(401);
        const guest =  await Guests.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!guest[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userID = guest[0].id;
            const name = guest[0].name;
            const email = guest[0].email;
            const accessToken = jwt.sign({userID, name, email}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            res.json({accessToken});
        });
    } catch (err){
        console.log(err);
    }
}