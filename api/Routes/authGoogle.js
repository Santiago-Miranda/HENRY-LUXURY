import express from "express";
import passport from "passport"
import GoogleUser from "../Models/GoogleUserModel.js";
import generateToken from "../utils/generateToken.js";



const googleRouter = express.Router();

googleRouter.post("/loginGoogle", async(req, res) => {
const {email,name} = req.body
   console.log(req.body)
	   const findUser = await GoogleUser.findOne({ email });

if (!findUser) {
	const newUser = {
		name: name,           
		email: email,        
	}
	const addUser = await GoogleUser.create(newUser)
	const token = generateToken(addUser._id)
	const userId = addUser._id
	const name = addUser.name
	const email = addUser.email
return	res.status(200).send({ token, userId, email, name })
  }else{

	const token = generateToken(findUser._id)
	const userId = findUser._id
	const userMail = findUser.email
	const userName = findUser.name
 return  res.status(400).send({ token,userId,userMail,userName})
  }
})

export default googleRouter


/*const { OAuth2Client } = require("google-auth-library");

dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const app = express();

app.use(express.json());

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post("/api/google-login", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });

  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});
*/