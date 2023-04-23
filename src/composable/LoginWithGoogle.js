var passport = require("passport");
var GoogleStrategy = require("passport-google-oidc");
const User = require("@/views/User.vue");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((user, done) => {
  done(null, user.id);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "137781713061-gk7oeuhgnnm0c6dej59jhn3jgimp2evb.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:8083/google/callback",
    },
    function (identifier, profile, done) {
      //register UserHere
      done(null, profile);
    }
  )
);
