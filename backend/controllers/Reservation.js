import Reservation from "../models/Reservation.Model.js"
import Guests from "../models/Guest.Model.js";
import Rooms from "../models/Room.Model.js";


// export const newBooked = async(req,res) =>{
//     try {
//         const {checkin, checkout} = req.body;
//         const booking = await Reservation.create({
//             checkin: checkin,
//             checkout: checkout, 

//         });
//         res.json(booking);
//     } catch (error) {
//         console.log(error);
//     }
// }

export const bookRoom = async(req,res) =>{
    try {
        const booking = await Reservation.findOne({
            include: [{model: Guests,as: 'guest'},{model: Rooms,as: 'room'}],
            where: {guest: req.params.gid, room: req.params.rid}
        });
        res.json(booking);
    } catch (error) {
        console.log(error);
    }
}

export const newBooked = async(req,res) =>{
    const {guestname, roomtype, checkin, checkout} = req.body;
    try {
        await Reservation.create({
            guestname: guestname,
            roomtype: roomtype,
            checkin: checkin,
            checkout: checkout
        });
        res.status(200).json({msg: "You have successfully booking room!"})
    } catch(error){
        console.log(error);
    }
}