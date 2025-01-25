const mongoose = require("mongoose");

const schema = new mongoose.Schema(
	{
		shortId: {
			type: String,
			required: true,
			unique: true,
		},
		redirectURL: {
			type: String,
			required: true,
		},
		visitHistory: [
			{
				timestamp: { type: Date, default: Date.now },
			},
		],
	},
	{
		timestamps: true,
	}
);

const URL = mongoose.model("url", schema);
module.exports = URL;
