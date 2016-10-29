const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const themeSchema = new mongoose.Schema({
	themeName: String,
	title: String,
	backgroundImg: String,
	profileImg: String,
	content: String,
	rootUrl: String,
	link1Text: String,
	link1Url: String,
	link2Text: String,
	link2Url: String,
	link3Text: String,
	link3Url: String,
	link4Text: String,
	link4Url: String
});

module.exports = mongoose.model('Theme', themeSchema);