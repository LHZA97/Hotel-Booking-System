import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Rooms = db.define('rooms', {
    type:{
        type: DataTypes.STRING
        
    },
    description:{
        type: DataTypes.TEXT
             
    },
    sizes:{
        type: DataTypes.INTEGER
        
    },
    capacity:{
        type: DataTypes.INTEGER
        // validate: {
        //     notEmpty: true,
        //     min: 10
        // }
    },
    price:{
        type: DataTypes.INTEGER
    },
    image:{
        type: DataTypes.STRING
    },
    published: {
        type: DataTypes.BOOLEAN
    }
},{
    freezeTableName: true
})

export default Rooms;