
import express from "express";
import asyncHandler from "express-async-handler";
import sendConfirmationEmail from "../config/nodemailer.js";
import { protect, admin } from "../Middleware/AuthMiddleware.js";

import generateToken from "../utils/generateToken.js";
import User from "./../Models/UserModel.js";
import nodemailer from "nodemailer"
import passport from "passport"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import axios from "axios"

const userRouter = express.Router();

// LOGIN
userRouter.post("/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });


    if (user && user.status === "Pending"){
      res.status(401)
      throw new Error("Please confirm your email.")
    } else if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else{
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);
//LOGIN WITH GOOGLE
userRouter.post("/loginGoogle", async(req, res) => {
  const {email,name} = req.body
 console.log(req.body)
     const findUser = await User.findOne({ email });
    
      if (!findUser) {
          const newUser = {
              name: name,           
              email: email,        
          }
          const addUser = await User.create(newUser)
          const token = generateToken(addUser._id)
          const userId = addUser._id
          const userName = addUser.name
          const userMail = addUser.email
          res.status(200).send({ token, userId, userMail, userName })
        }else{
        const token = generateToken(findUser._id)
        const userId = findUser._id
        const userMail = findUser.email
        const userName = findUser.name

       return res.status(400).send({ token, userId,  userMail, userName,  })
        }
        
      });
       
                
// REGISTER
userRouter.post("/", asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let token = '';
    for (let i = 0; i < 25; i++) {
        token += characters[Math.floor(Math.random() * characters.length )];
    }
    console.log(token)
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
      confirmationCode: token
    });
    

    if (user) {
      sendConfirmationEmail(user.name, user.email, user.confirmationCode)
      res.status(201).json({
        _id: user._id,
        name: user.name,
        image: user.image,
        email: user.email,
        isAdmin: user.isAdmin,
        isBaned: user.isBaned,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  })
);

// PROFILE
userRouter.get("/profile", protect, asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// UPDATE PROFILE
userRouter.put("/profile", protect, asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        createdAt: updatedUser.createdAt,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// CONFIRMATE EMAIL, necesito ayuda aca jeje
userRouter.put("/authMail", protect, asyncHandler(async(req, res) => {
  console.log(user)
  const userExists = await await User.findOne({ email })
  
}))

//BORRADO LOGICO
userRouter.put("/ban", protect, asyncHandler(async(req, res) => {
    const { email } = req.body;
    const user = await User.findOne({email: email})
    
    if(user && !user.isBaned) {
      user.isBaned = true
      user.save()
      res.status(200).send("User banned.")
    } else if (user && user.isBaned){
      user.isBaned = false
      user.save()
      res.status(200).send("User unbanned.")
    } else {res.status(404);
    throw new Error('User not found')}
}))

// GET ALL USER ADMIN
userRouter.get("/", protect, admin, asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);


export default userRouter;
