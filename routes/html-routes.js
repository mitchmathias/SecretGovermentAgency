module.exports = function(app) {
  // Requiring our custom middleware for checking if a user is logged in
  const isAuthenticated = require("../config/middleware/isAuthenticated");

  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("homepage");
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    if (req.user) {
      res.render("members");
    }
    res.render("login");
  });

  // Files for non authenticated users
  app.get("/nosecrets", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("nosecrets");
  });

  //Routes for secret files
  app.get("/level1", isAuthenticated, (req, res) => {
    if (req.user) {
      res.render("level1");
    }
    // res.render("nosecrets");
  });

  app.get("/level2", isAuthenticated, (req, res) => {
    if (req.user) {
      res.render("level2");
    }
    // res.render("nosecrets");
  });

  app.get("/level3", isAuthenticated, (req, res) => {
    if (req.user) {
      res.render("level3");
    }
    // res.render("nosecrets");
  });
};
