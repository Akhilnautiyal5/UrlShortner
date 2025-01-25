const shortid = require("shortid");
const URL = require("../models/url");

module.exports.handleGenerateNewURL = async (req, res) => {
	try {
		const body = req.body;

		if (!body.url) {
			return res.status(400).json({ error: "URL is required" });
		}

		const shortId = shortid.generate(8);

		await URL.create({
			shortId,
			redirectURL: body.url,
			visitHistory: [],
		});

		res.redirect("/");
	} catch (error) {
		console.error("Error creating short URL:", error);
		return res
			.status(500)
			.json({ error: "An internal server error occurred." });
	}
};

module.exports.handleUrlAnalytics = async (req, res) => {
	const id = req.params.id;

	const entry = await URL.findOne({ shortId: id });
	if (!entry) {
		return res.status(404).json({ error: "URL not found" });
	}
	const totalClicks = entry.visitHistory.length;
	const analytics = {
		id: entry.shortId,
		url: entry.redirectURL,
		visitHistory: entry.visitHistory,
	};

	res.json({ totalClicks, analytics });
};

module.exports.handleRedirect = async (req, res) => {
	const shortId = req.params.shortId;
	const entry = await URL.findOneAndUpdate(
		{ shortId },
		{
			$push: {
				visitHistory: {
					timestamp: Date.now(),
				},
			},
		}
	);
	if (!entry) {
		return res.status(404).json({ error: "URL not found" });
	}
	res.redirect(entry.redirectURL);
};

module.exports.handleDeleteURL = async (req, res) => {
	const id = req.params.id;
	const entry = await URL.findOneAndDelete({ shortId: id });
	if (!entry) {
		return res.status(404).json({ error: "URL not found" });
    }
    
	res.status(200).json({ message: "URL deleted successfully" });
};

// module.exports = { handleGenerateNewURL, handleUrlAnalytics, handleRedirect };
