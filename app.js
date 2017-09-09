var express     = require("express"),
app             = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// INDEX ROUTE
    app.get(["/", "/home"], function(req, res){
        res.render('index')
    })







app.listen(process.env.PORT, process.env.IP, function(){
   console.log('Shopping Cart Server: CONNECTED'); 
});