import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import "./input.css";
// import passport from "passport";

import GAuth from "vue3-google-oauth2";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

// app.use(passport.initialize());
// app.use(passport.session());
app.use(router);
app.use(vuetify);
// app.get("/login/google", passport.authenticate("google", { scope: "profile" }));
// app.get(
//   "/oauth2/redirect/google",
//   passport.authenticate("google", {
//     failureRedirect: "/login",
//     failureMessage: true,
//   }),
//   function (req, res) {
//     res.redirect("/");
//   }
// );
app.mount("#app");
