const express = require ("express");
const bodyParser = require ("body-parser");
const cookieParser = require ("cookie-parser");
const config = require('./config.js');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));




app.listen(config.port, function() {
	console.log("listening to port: ", config.port);
});
