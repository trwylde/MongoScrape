let express = require('express'); 
let bodyParser = require('body-parser'); 
let exphbs = require('express-handlebars');
var db = require("./models");

let PORT = process.env.PORT || 3000; 
let app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public")); 


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/scrape.js")(app);

app.listen(PORT, function() {
console.log("Use localhost:3000");
});
