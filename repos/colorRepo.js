let fs = require("fs");
const path = require("path");
let FILE_NAME = path.join(__dirname, "../data/colors.json");

let colorRepo = {
	get: function (resolve, reject) {
		fs.readFile(FILE_NAME, function (err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(data));
			}
		});
	},

	getByName: function (name, resolve, reject) {
		fs.readFile(FILE_NAME, function (err, data) {
			if (err) {
				reject(err);
			} else {
				let colors = JSON.parse(data).find(
					(c) => c.name.toLowerCase() === name.toLowerCase()
				);
				resolve(colors);
			}
		});
	},

	getByGroup: function (group, resolve, reject) {
		fs.readFile(FILE_NAME, function (err, data) {
			if (err) {
				reject(err);
			} else {
				let colors = JSON.parse(data).filter(
					(c) => c.group.toLowerCase() === group.toLowerCase()
				);
				resolve(colors);
			}
		});
	},

	getByTheme: function (theme, resolve, reject) {
		fs.readFile(FILE_NAME, function (err, data) {
			if (err) {
				reject(err);
			} else {
				let colors = JSON.parse(data).filter(
					(c) => c.theme.toLowerCase() === theme.toLowerCase()
				);
				resolve(colors);
			}
		});
	},
};

module.exports = colorRepo;
