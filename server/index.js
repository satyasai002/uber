const express = require( 'express');
const mongoose = require( 'mongoose');
const cors = require( 'cors');
const jwt = require('jsonwebtoken');
const middleware =  require('./middleware.js');
const middleware1 =  require('./middleware1.js');
const middleware2 =  require('./middleware2.js');
const bodyParser = require('body-parser');
const User = require( './models/User.js');
const Driver = require('./models/driver.js');
const Rides = require('./models/rides.js');
const Prices = require('./models/prices.js');


const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/signin',async (req,res)=>{
    try {
        const {UserName , Mobile , Email , Password , ConfirmPassword, Rides } = req.body;
        let exist = await User.findOne({Email});
        let Mexist= await User.findOne({Mobile});
        if(Mexist){
            return res.status(400).send('User already exist with given mobile number')
        }
        if(exist){
            return res.status(400).send('User already exists with given Email ID');
        }
        
        
        if(Password !== ConfirmPassword){
            return res.status(400).send('passwords does not match')
        }
        let newUser = new User({
            UserName,
            Mobile,
            Email,
            Password,
            ConfirmPassword,
            Rides,
        })
        await newUser.save();
        res.status(200).send('Registered Successfully')

    } catch (error) {
        console.log(error);
        return res.status(500).send('internal server error');
    }

});

app.post('/userlogin',async (req,res)=>{
    try {
        const {Email, Password} =  req.body;
        let exist = await User.findOne({Email})
        if(!exist){
            return res.status(400).send('Invalid Email');
        }
        if(exist.Password !== Password){
            return res.status(400).send('Wrong password');
        }
        let payload = {
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},(err,token)=>{
            if(err) throw err;
            return res.json({token})
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send('internal server error');
        
    }


})

app.get('/myprofile',middleware,async(req,res)=>{
    try {
        let exist1 = await User.findById(req.user.id);
        if(!exist1){
            return res.status(400).send('user not found');
        }
        res.json(exist1);
    } catch (error) {
        console.log(error);
        return res.status(500).send('internal server error');
    }
})
app.post('/newride',middleware,async(req,res)=>{
    try {
        let {Passengers , From , To , PickUpDate , PickUpTime } = req.body;
        let User = req.user.id;
        let newride = new Rides({
            User,
            Passengers,
            From,
            To,
            PickUpDate,
            PickUpTime,

        });
        await newride.save();
        return res.status(200).send('ride booked');

    } catch (error) {
        console.log(error);
        return res.status(500).send('internal server error');
    }
})

app.get('/:id/rides',middleware,async(req,res)=>{
    let exist = await User.findById(req.user.id);
    Rides
      .find({ User: exist })
      .then((cabForms) => {
        if (cabForms) {
          return res.status(200).json({ message: 'Schedule cab forms found', cabForms: cabForms });
        }
        res.status(404).json({ message: 'Fetching schedule cab forms failed.' });
      })
      .catch((err) => {
        console.log('Error getting schedule cab forms by given creator: ' + err);
        res.status(404).json({ message: 'Fetching schedule cab forms failed!' });
      })
      })
app.post('/driverlogin',async (req,res)=>{
    try {
        const {Email, Password} =  req.body;
        let exist1 = await Driver.findOne({Email})
        if(!exist1){
            return res.status(400).send('Invalid Email');
        }
        if(exist1.Password !== Password){
            return res.status(400).send('Wrong password');
        }
        let payload1 = {
            driver:{
                id : exist1.id,
            }
        }
        jwt.sign(payload1,'jwtSecret',{expiresIn:3600000},(err,token1)=>{
            if(err) throw err;
            return res.json({token1})
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send('internal server error');
        
    }


})
app.get('/driver/profile',middleware1,async(req,res)=>{
    try {
        let exist1 = await Driver.findById(req.driver.id);
        if(!exist1){
            return res.status(400).send('user not found');
        }
        res.json(exist1);
    } catch (error) {
        console.log(error);
        return res.status(500).send('internal server error');
    }
})
app.post('/adddriver',middleware2,async(req,res)=>{
    try {
        const {DriverName , Mobile , Email , Photo , Age , CarDetails} = req.body;
        let exist = await Driver.findOne({Email});
        let Mexist= await Driver.findOne({Mobile});
        const Password = 'password';
        const ConfirmPassword = Password;
        const Ratings = '0';
        if(Mexist){
            return res.status(400).send('Driver already exist with given mobile number')
        }
        if(exist){
            return res.status(400).send('Driver already exists with given Email ID');
        }
        
        
        if(Password !== ConfirmPassword){
            return res.status(400).send('passwords does not match')
        }
        let newDriver = new Driver({
            DriverName,
            Mobile,
            Email,
            Photo,
            Age,
            CarDetails,
            Password,
            ConfirmPassword,
            Ratings
        })
        await newDriver.save();
        res.status(200).send('Registered Successfully')

    } catch (error) {
        console.log(error);
        return res.status(500).send('internal server error');
    }
})
app.post('/adminlogin',async(req,res)=>{
    try {
        let {UserName , Password} = req.body;
    if(UserName !== 'Admin'){
        console.log('incorrect Username');
        return res.status(400).send('incorrect Username');
    }
    if(Password !== 'Password'){
        console.log('incorrect password');
        return res.status(400).send('incorrect Password');
    }
    let payload2 = {
            admin:{
                id : "123456",
            }
        } ;
    jwt.sign(payload2,'jwtSecret',{expiresIn:3600000},(err,token2)=>{
            if(err) throw err;
            return res.json({token2})
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send('internal server error');
    }
    


})
app.get('/alldrivers',middleware2,async(req,res)=>{
    Driver
      .find()
      .then((DriverForms) => {
        if (DriverForms) {
          return res.status(200).json({ message: 'Schedule cab forms found', DriverForms: DriverForms });
        }
        res.status(404).json({ message: 'Fetching schedule cab forms failed.' });
      })
      .catch((err) => {
        console.log('Error getting schedule cab forms by given creator: ' + err);
        res.status(404).json({ message: 'Fetching schedule cab forms failed!' });
      })
    
})


const Connection_URL = 'mongodb+srv://sai:1234@taxibooking.myjzl.mongodb.net/?retryWrites=true&w=majority';
const Port = process.env.Port || 5000;

mongoose.connect(Connection_URL).then(app.listen(Port,()=>console.log(`server is listening at ${Port}`)))
.catch((err)=>console.log(`server not up due to ${err}`));

