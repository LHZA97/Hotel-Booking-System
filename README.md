# Hotel-Booking-System
Hotel-Booking_system is a project for the BAC Programme under KPT sponsorship.  

1. Create config folder in backend folder
2. Add Database.js file with below setup:
  
        import {Sequelize} from "sequelize";
        
        const db = new Sequelize('<yourdatabasename>','<yourusername eg:root>','<yourpassword>',{
        host: "localhost",
        dialect: "mysql"
        });
        
        export default db;

3. Create the .env file in the backend folder and add the details as below:

        ACCESS_TOKEN_SECRET = just put whatever your want, make sure to write as long as you can
        REFRESH_TOKEN_SECRET = same here
    
4. Access both folder (backend and frontend) in the difference terminal, and npm init -a, after that npm install.
5. On the frontend terminal, run npm start while on the backend terminal run nodemon.
