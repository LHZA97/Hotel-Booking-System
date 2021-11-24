import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//import Guests from './models/Guest.Model.js' //importing schema from Guest
//import Rooms from './models/Room.Model.js' //importing schema from Room
dotenv.config();
const app = express();

try{
    await db.authenticate();
    console.log("Database Connected...")
    //await Guests.sync(); //sync with model and creating a table
    //await Rooms.sync(); //sync with model and creating a table
} catch(error){
    console.log(error)
}

 app.use(cors(
{
    credentials: true,
    origin:'http://localhost:3000'
}
));
app.use(cookieParser());
app.use(express.json());
app.use(router);

//static Images Folder
app.use('/Images', express.static('./Images'))

app.listen(5000, ()=> console.log("Server running on port 5000"))