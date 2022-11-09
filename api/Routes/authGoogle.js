import express from "express";
import passport from "passport"

const CLIENT_URL = "http://localhost:3000/";

const googleRouter = express.Router();

googleRouter.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      cookies: req.cookies
    });
  }
});

googleRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

googleRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

googleRouter.get("/google", passport.authenticate("google", { scope: ["profile"] }));

googleRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
); 


//googleRouter.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
/*googleRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(CLIENT_URL)
  }
)

// @desc    Logout user
// @route   /auth/logout
googleRouter.get('/logout', (req, res, next) => {
  req.logout((error) => {
      if (error) {return next(error)}
      res.redirect('/')
  })
}) */
export default googleRouter