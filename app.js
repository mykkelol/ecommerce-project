var express     = require("express"),
app             = express(),
bodyParser      = require("body-parser"), // extract entire body of HTTP request through req.body
mongoose        = require("mongoose"), // ODM and schemas
methodOverride  = require("method-override");

// requiring routes
    var indexRoutes = require("./routes/index");

// setting up files
    mongoose.Promise = global.Promise;
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(__dirname + "/public"));
    app.use(methodOverride("_method"));
    app.set('view engine', 'ejs');

app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("SHOPPING CART SERVER CONNECTED");
});