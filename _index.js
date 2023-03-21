const express = require("express");
const app = express();
const router = express.Router();
const port = 4000;
let colorRepo = require("./repos/colorRepo");

// use cors to allow cross origin resource sharing
const cors = require("cors");
app.use(cors());

router.get("/", (req, res) => {
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

router.get("/:name", (req, res, next) => {
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

app.use("/api", router);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
