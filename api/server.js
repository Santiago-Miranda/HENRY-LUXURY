import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from "passport"
import googleRouter from "./Routes/authGoogle.js"
import session from "express-session"
import MongoStore from "connect-mongo"
import cookieSession from "cookie-session"
import('./passport.js')

dotenv.config();

connectDatabase();

const app = express();


app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
); 

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

/*app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
    }
  }))*/


app.use(passport.initialize());
app.use(passport.session());



app.use(bodyParser.json({limit: '1gb', extended: true}));
app.use(bodyParser.urlencoded({limit: '1gb', extended: true}));


// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/auth", googleRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;





app.listen(PORT, console.log(`server run in port ${PORT}`));
