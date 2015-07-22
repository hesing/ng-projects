var express = require("express"),
	app = express(),
	port = process.env.PORT || 4000;

app.use(express.static("frontend"));

app.listen(port, function(){
	console.log("browse http://localhost:4000/")
})