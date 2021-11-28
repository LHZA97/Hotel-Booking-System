# Hotel-Booking-System

**_About Project_**
          
    Hotel booking system is a software application that is implemented for the hotels to allow guests making room 
    reservation anywhere and anytime worldwide via a website without the hassle of physically meeting with them. 
    The objective of this project is to develop system that make it easy for customers to make reservations with 
    feature of having their own dashboard of each user and to provide information about each of the hotel rooms.
    
</br>

**_System Flowchart_**
![This is an image](https://media.discordapp.net/attachments/906368435078975538/913626129955430450/unknown.png)
    
 
</br>

**_Guides to run the application_**

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
    
4. Access both folder (backend and frontend) in the difference terminal, run:  

        npm init -a
        npm install
        
5. On the frontend terminal, run npm start while on the backend terminal run nodemon.

    >(Notes: If your terminal cannot run nodemon, please install the nodemon globally, and if it not working, install nodemon on your Windows/Mac environment.)
    </br>

**_Project collabrator:_**
Haziq
https://github.com/Arezeeq
</br>

**_Disclaimer_**

>>_This is a student project that was created at [BAC education] under a PENJANA KPT-CAP Program._
_Some of the features are yet to be improved in the near future._
...




