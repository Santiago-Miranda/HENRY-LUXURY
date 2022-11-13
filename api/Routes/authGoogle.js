/* import express from "express";
import passport from "passport"


const googleRouter = express.Router();
const CLIENT_URL = "http://localhost:3000";

googleRouter.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

googleRouter.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

googleRouter.get("/google", passport.authenticate("google", ["profile", "email"]));

googleRouter.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

googleRouter.get("/logout", (req, res) => {
	req.logout();
	res.redirect(CLIENT_URL);
}); */

import express from "express"
import GoogleUser from "../Models/GoogleUserModel.js";
import generateToken from "../utils/generateToken.js";

const googleRouter = express.Router();

googleRouter.post("/loginGoogle", async(req, res) => {
	const {email,name} = req.body
   console.log(req.body)
	   const findUser = await GoogleUser.findOne({ email });
	  /*if (oldUser) {
		const result = { _id: oldUser._id.toString(), email,image,name};
		return res.status(200).json({ result});
   
   */

		if (!findUser) {
			const newUser = {
				name: name,           
				email: email,        
			}
			const addUser = await GoogleUser.create(newUser)
			const token = generateToken(addUser._id)
			const userId = addUser._id
			const userName = addUser.name
			const userMail = addUser.email
		return	res.status(200).send({ token, userId, userMail, userName })
		  }else{

			const token = generateToken(findUser._id)
            const userId = findUser._id
            const userMail = findUser.email
            const userName = findUser.name
          return  res.status(400).send({ token,userId,userMail,userName})
		  }
		  });
		  

		


export default googleRouter