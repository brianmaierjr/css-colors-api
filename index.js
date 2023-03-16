const express = require("express");
const app = express();
let colorRepo = require("./repos/colorRepo");

// use cors to allow cross origin resource sharing
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/api/colors", (req, res, next) => {
	colorRepo.get(
		function (data) {
			res.status(200).json({
				status: 200,
				statusText: "OK",
				message: "All css colors retrieved.",
				data: data,
			});
		},
		function (err) {
			next(err);
		}
	);
});

// /colors/ gets all colors
// /colors/{name} gets a color by name
// /colors/groups gets all color groups
// /colors/groups/{name} gets all colors in a group

app.listen(4000, () => {
	console.log("Running on port 4000.");
});

// Export the Express API
module.exports = app;
