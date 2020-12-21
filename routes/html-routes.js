module.exports = function(app) {
  // Requiring our custom middleware for checking if a user is logged in
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

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
  app.get("/level/:level", isAuthenticated, (req, res) => {
    if (req.user && req.user.clearance >= req.params.level) {
      db.Article.findAll({
        where: {
          clearance: req.params.level
        }
      })
        .then(results => {
          const articles = JSON.parse(JSON.stringify(results));
          return res.render("level", { articles, level: req.params.level });
        })
        .catch(err => {
          console.log(err);
          return res.sendStatus(500);
        });
    } else {
      return res.render("nosecrets");
    }
  });

  app.get("/userdoc", (req, res) => {
    // If the user already has an account send them to the members page
    return res.render("userdoc");
  });
};
