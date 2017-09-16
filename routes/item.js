var express     = require('express'),
    router      = express.Router(),
    Item        = require('../models/item');
    //middleware  = require('../middleware/index.js');
    
// Index Route: show all items
    router.get(['/', '/home'], function(req, res){
        res.render('index');
    });
    
// Create Route: add new items to db
    router.post(['/', '/home'], function(req, res){
        
    });

// New Route: show form to add new items

// Show Route: item show page

// Edit Route: edit an item

// Update Route: update db and RESTful routes based after edit

// Destroy Route: delete an item


module.exports = router;