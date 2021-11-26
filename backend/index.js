import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import Guests from './models/Guest.Model.js' //importing schema from Guest
// import Rooms from './models/Room.Model.js' //importing schema from Room
//import Reservation from './models/Reservation.Model.js' //importing schema from Reservation
dotenv.config();
const app = express();

try{
    await db.authenticate();
    console.log("Database Connected...")
    // await Guests.sync(); //sync with model and creating a table
    // await Rooms.sync(); //sync with model and creating a table
    //await Reservation.sync(); //sync with model and creating a table
    
    // Reservation.hasMany(Guests, {foreignKey:  'booking_id', as: 'guest_id'})
    // Reservation.hasMany(Rooms, {foreignKey: 'bookingroom_id', as:'room_id'}) 
    // Guests.belongsTo(Reservation, {foreignKey: 'booking_id',as: 'reservationguest_id'})
    // Rooms.belongsTo(Reservation, {foreignKey: 'bookingroom_id',as: 'reservationroom_id'})


} catch(error) {console.log(error)}

app.use(cors({credentials: true,origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

//static Images Folder
app.use('/Images', express.static('./Images'))

app.listen(5000, ()=> console.log("Server running on port 5000"))