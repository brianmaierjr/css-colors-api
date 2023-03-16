const express = require("express");
const app = express();

const data = [
	{
		name: "blue",
		hex: "#0000FF",
	},
	{
		name: "red",
		hex: "#FF0000",
	},
];

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
	res.send(data);
});

app.listen(4000, () => {
	console.log("Running on port 4000.");
});

// Export the Express API
module.exports = app;
