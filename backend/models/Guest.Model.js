import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Guests = db.define('guests', {
    name:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    email:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            isEmail: true
        }     
    },
    password:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,               
            min: 10
        }
    },
    contact:{
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: true,               
            min: 10
        }
    },
    refresh_token:{
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            min: 10
        }
    }
},{
    freezeTableName: true
})

export default Guests;