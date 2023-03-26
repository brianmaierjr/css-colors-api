// require("dotenv").config();

// const mongoose = require("mongoose");
// const mongoString = process.env.DATABASE_URL;

// mongoose.connect(mongoString);
// const db = mongoose.connection;

// db.on("error", (error) => {
// 	console.log(error);
// });

// db.once("connected", () => {
// 	console.log("Database Connected");
// });

const express = require("express");
const app = express();
let colorRepo = require("./repos/colorRepo");
const path = require("path");

// use cors to allow cross origin resource sharing
const cors = require("cors");
app.use(cors());

// /colors/ gets all colors
app.get("/api/colors", (req, res, next) => {
	colorRepo.get(
		function (data) {
			res.status(200).json({
				status: 200,
				statusText: "OK",
				message: "All css colors retrieved.",
				count: data.length,
				colors: data,
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

// /colors/group/{name} gets all colors in a group
app.get("/api/colors/group/:name", (req, res, next) => {
	colorRepo.getByGroup(
		req.params.name,
		function (data) {
			if (data.length > 0) {
				res.status(200).json({
					status: 200,
					statusText: "OK",
					message: `All ${req.params.name} colors retrieved.`,
					count: data.length,
					colors: data,
				});
			} else {
				res.status(404).json({
					status: 404,
					statusText: "Not Found",
					message: `Color group ${req.params.name} could not be found.`,
					error: {
						code: "NOT_FOUND",
						message: `Color group ${req.params.name} could not be found.`,
					},
				});
			}
		},
		function (err) {
			next(err);
		}
	);
});

// /colors/theme/{name} gets all colors in a theme
app.get("/api/colors/theme/:name", (req, res, next) => {
	colorRepo.getByTheme(
		req.params.name,
		function (data) {
			if (data.length > 0) {
				res.status(200).json({
					status: 200,
					statusText: "OK",
					message: `All ${req.params.name} theme colors retrieved.`,
					count: data.length,
					colors: data,
				});
			} else {
				res.status(404).json({
					status: 404,
					statusText: "Not Found",
					message: `Colors for theme ${req.params.name} could not be found.`,
					error: {
						code: "NOT_FOUND",
						message: `Colors for theme ${req.params.name} could not be found.`,
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

app.use(express.static(path.resolve("./public")));

// Export the Express API
module.exports = app;
