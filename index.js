const express = require("express");
const app = express();
let colorRepo = require("./repos/colorRepo");

// use cors to allow cross origin resource sharing
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// /colors/ gets all colors
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

// /colors/{name} gets a color by name
app.get("/api/colors/:name", (req, res, next) => {
	colorRepo.getByName(
		req.params.name,
		function (data) {
			if (data) {
				res.status(200).json({
					status: 200,
					statusText: "OK",
					message: "Single color retrieved.",
					data: data,
				});
			} else {
				res.status(404).json({
					status: 404,
					statusText: "Not Found",
					message: "The color could not be found.",
					error: {
						code: "NOT_FOUND",
						message: `Color ${req.params.name} could not be found.`,
					},
				});
			}
		},
		function (err) {
			next(err);
		}
	);
});

app.listen(4000, () => {
	console.log("Running on port 4000.");
});

// Export the Express API
module.exports = app;
