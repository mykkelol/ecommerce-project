var mongoose = require("mongoose");

// item schema
var itemSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
});

var Item = mongoose.model("Item", itemSchema);

// Item.create({
//     name: "Love-At-First Sight Shooting Bow",
//     price: "$999.99",
//     image: "http://www.classic-bow.com/catalog/images/0245_recurve_bow.jpg",
//     description: "Be the love matcher. Help your brothers and sisters in the friendzone escape their loneliness."
// }, function(err, item){
//     if (err){
//         console.log(err);
//     } else {
//         console.log(item);
//     }
// });

module.exports = mongoose.model('Item', itemSchema);