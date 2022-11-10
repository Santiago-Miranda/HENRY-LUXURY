import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from "passport"

const GOOGLE_CLIENT_ID ="246029804141-cigde280dqd4mqt2omnup4jirjcgn2en.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET ="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";


passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret:GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, done) {
		done(null, profile);
      console.log(profile)
	  console.log(accessToken)
	  console.log(refreshToken)		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});