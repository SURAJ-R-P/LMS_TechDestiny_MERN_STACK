const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const authentication = require("../middleware/authentication")

require('../db/conn')
const User = require('../model/usermodel')

router.get('/', (req,res) => {
    res.send("hello from router")
})

/* router.post('/register',(req, res) => {
    const {name, email, phone, password, cpassword} = req.body
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(400).json({error: "Please fill all the field"})
    }

    User.findOne({email:email})
    .then((userExist) => {
        if(userExist){
            return res.status(400).json({error: "EmailId already exist"})
        }
        const user = new User({name, email, phone, password, cpassword})

        user.save()
        .then(() => {
            res.status(200).json({message: "User register successfull"})
        }).catch((err) => res.status(500).json({error: "Failed to register"}))
    }).catch((err) => {
        console.log(err)
    })
}) */

router.post('/register', async (req, res) => {
    const {name, email, phone, password, cpassword} = req.body
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(400).json({error: "Please fill all the field"})
    }

    try {
        const userExist = await User.findOne({email:email})
        
        if(userExist){
            return res.status(400).json({error: "EmailId already exist"})
        } else if(password != cpassword){
            return res.status(400).json({error: "Chcek the Password and Confirm Password"})
        } else {
            const user = new User({name, email, phone, password, cpassword})
            const userRegister = await user.save()
            if(userRegister){
                res.status(200).json({message: "User register successfull"})
            }
        }
    } catch (err) {
        console.log(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({error : "Please fill all the fields"})
        }

        const userEmail = await User.findOne({email:email})
        const userPassword = await bcrypt.compare(password, userEmail.password)
        
        token = await userEmail.generateAuthToken()

        res.cookie("jwtoken", token, {
            // maxAge : 30*24*60*60*1000 // for 30 days
            expires: new Date(Date.now() + 25892000000), // 30*24*60*60*1000 for 30 days
            httpOnly: true
        })

        if(!userEmail || !userPassword){
            res.json({error : "User login error EmailId or Password is incorrect"})
        } else {
            res.json({message : "User login successfull"})
        }

    } catch (err) {
        console.log(err)
    }
})

router.get('/about', authentication, (req, res) => {
    console.log("Hello")
    res.send(req.rootUser)
})

router.post('/contact', authentication, async (req, res) => {
    try {

        const { name, email, phone, message } = req.body;
        
        if (!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({ error: "Please filled the contact form " });
        }

        const userContact = await User.findOne({ _id: req.userID });

        if (userContact) {
            
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({ message: "User Contact successfully" });

        }
        
    } catch (error) {
        console.log(error);
    }

});

router.get('/management', authentication, (req, res) => {
    res.send(req.rootUser)
})

router.get('/logout', (req, res) => {
    res.clearCookie("jwtoken", {path: "/"})
    res.status(200).send("User Logout")
})


module.exports = router