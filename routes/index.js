var express     = require("express"),
    passport    = require("passport"),
    //User        = require("../models/user"),
    router      = express.Router();
    
// register form
    router.get("/register", function(req, res){
        res.render("register"); 
    });

// handling route register logic
    //router.post("/")


// login form
    router.get("/login", function(req, res){
        res.render("login");
    });

// handling login logic

// logout route

module.exports = router;