var express     = require('express'),
bodyParser      = require('body-parser'), // extract entire body of HTTP request through req.body
mongoose        = require('mongoose'), // ODM and schemas
expressSanitizer= require('express-sanitizer'), // sanitize html tags on webApp
methodOverride  = require('method-override'),
app             = express();

// requiring routes
    var indexRoute = require('./routes/index');
    var itemRoute = require('./routes/item');

// setting up files
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/shoppie_app', {useMongoClient: true});
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(__dirname + '/public'));
    app.use(methodOverride('_method'));
    app.use(expressSanitizer());
    app.set('view engine', 'ejs');

app.use(indexRoute);
app.use(itemRoute);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log('SHOPPING CART SERVER CONNECTED');
});