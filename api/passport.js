import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from "passport"
import mongoose from "mongoose"
import GoogleUser from './Models/GoogleUserModel.js';


const GOOGLE_CLIENT_ID ="969181774320-ioogvj06fjbufjdl0in3psl7f8s6hphq.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET ="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"

/*module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret:GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        }

        try {
          let user = await GoogleUser.findOne({ googleId: profile.id })

          if (user) {
            done(null, user)
          } else {
            user = await GoogleUser.create(newUser)
            done(null, user)
          }
        } catch (err) {
          console.error(err)
        }
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  }) */

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
        console.log(profile)
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });