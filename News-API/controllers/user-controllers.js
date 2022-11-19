const User  = require('../models/user-model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const config = require('../config/config-variables')

// Register method
const registerUser = (req, res) =>{

    userData = req.body;

    User.findOne({username : userData.username} , (error , user) =>{
        if(error){
            console.log(error);
        }
        if(user){
            res.status(201).send("The username already exists.")
        }
        else{
            // pass userData to user
            let user  = new User(userData)

            // continue to saving user
            user.save((error , registeredUser) => {
                if(error){
                    console.log(error);
                }
                else{
                    // generating web token
                    let payload = {subject : registeredUser._id}
                    let token  = jwt.sign(payload , config.secretWord)

                    res.status(200).send({token});
                }
            });

        }
    });

};

// Login user function
const loginUser = (req, res) => {
    userDetails = req.body;

    User.findOne({username: userDetails.username} , (error , user) => {

        if (error){
            console.log(error);
        }
        if(!user){
            res.status(401).send('User not found');
        }
        else{
            if(user.password !== userDetails.password){
                res.status(401).send("Invalid password");
            }
            else{
                // generating and responding with token
                let payload = {subject : user._id}
                let token  = jwt.sign(payload , config.secretWord)
                
                res.send({token});
            }
        }
    });

};

const userProfile = (req, res) => {

    let user = req.user;
    res.send(user);

};

module.exports = {
    registerUser,
    loginUser,
    userProfile
}