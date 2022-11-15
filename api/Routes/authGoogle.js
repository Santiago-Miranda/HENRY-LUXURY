import express from "express";
import GoogleUser from "../Models/GoogleUserModel.js";
import generateToken from "../utils/generateToken.js";



const googleRouter = express.Router();

googleRouter.post("/loginGoogle", async(req, res) => {
	const { email, name } = req.body
    const findUser = await GoogleUser.findOne({ email })
	try {
        if (!findUser) {
            const newUser = {
                name: name,
                email: email,
                image: image
            
            }
            const addUser = await GoogleUser.create(newUser)
            const token = generateToken(addUser._id)
            const userId = addUser._id
            const userMail = addUser.email
            const userName = addUser.name
            const image = addUser.image

          return  res.status(200).send({ token, userId,  userMail, userName, image })

        } else {

            const token = generateToken(findUser._id)
            const userId = findUser._id       
            const userMail = findUser.email
            const userName = findUser.name
            const image = findUser.image

           return  res.status(201).send({ token, userId, userMail, userName, image })

        }
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error })
    }
}
) 

export default googleRouter


	

