const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index", {
		"title": "Biography", // change between quotes to change the title in the web page
		"name": "Connor Hing", // change between quotes to change the name in the web page
		"bio": "Hi! My name is Connor, and I am a junior at UAlbany studying Computer Science. I am a transfer student from Hudson Valley Community College, where I received my associate degree in Computer Information Systems in 2021. I am originally from Detroit, MI. My parent’s and I moved from Detroit to Stephentown, NY around 2008.", // change between quotes to change the bio in the web page
		"image": "https://418yassignment3.s3.amazonaws.com/20200430_170229.jpg" // change between quotes to change the image in the web page
	});
});

app.get("/add/:firstNumber/and/:secondNumber", (req, res) => {
	let x = parseInt(req.params.firstNumber),
		y = parseInt(req.params.secondNumber);
	res.send(x + " + " + y + " = " + (x + y));
});


app.listen(3000, () => {
	console.log("server running on port 3000");
});
