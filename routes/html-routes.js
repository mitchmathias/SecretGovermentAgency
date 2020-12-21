module.exports = function(app) {
  // Requiring our custom middleware for checking if a user is logged in
  const isAuthenticated = require("../config/middleware/isAuthenticated");

  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    return res.render("homepage");
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    return res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");
    }
    return res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    if (req.user) {
      return res.render("members");
    }
    return res.render("login");
  });

  // Files for non authenticated users
  app.get("/nosecrets", (req, res) => {
    // If the user already has an account send them to the members page
    return res.render("nosecrets");
  });

  app.get("/fakedoc", (req, res) => {
    // If the user already has an account send them to the members page
    return res.render("fakedoc");
  });

  //Routes for secret files
  app.get("/level1", isAuthenticated, (req, res) => {
    if (req.user && req.user.clearance >= 1) {
      return res.render("level1");
    }
    return res.render("nosecrets");
  });

  app.get("/level2", isAuthenticated, (req, res) => {
    if (req.user && req.user.clearance >= 2) {
      return res.render("level2");
    }
    return res.render("nosecrets");
  });

  app.get("/level3", isAuthenticated, (req, res) => {
    if (req.user && req.user.clearance >= 3) {
      return res.render("level3");
    }
    return res.render("nosecrets");
  });

  app.get("/userdoc", (req, res) => {
    // If the user already has an account send them to the members page
    return res.render("userdoc");
  });
};
