let fs = require("fs");
let FILE_NAME = "public/data/colors.json";

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

	search: function (searchObject, resolve, reject) {
		fs.readFile(FILE_NAME, function (err, data) {
			if (err) {
				reject(err);
			} else {
				let colors = JSON.parse(data);
				if (searchObject) {
					if (searchObject.name) {
						colors = colors.filter(function (color) {
							return color.name.indexOf(searchObject.name) > -1;
						});
					}
				}
				resolve(colors);
			}
		});
	},
};

module.exports = colorRepo;
