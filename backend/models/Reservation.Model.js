import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Guests from "./Guest.Model.js";
import Rooms from "./Room.Model.js";

const { DataTypes } = Sequelize;

const Reservation = db.define('booking', {
    guestname:{
        type: DataTypes.STRING,
        allowNull: false
        
    },
    roomtype:{
        type: DataTypes.STRING,
        allowNull: false
        
    },
    checkin:{
        type: DataTypes.STRING,
        allowNull: false
        
    },
    checkout:{
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    freezeTableName: true
});






export default Reservation;