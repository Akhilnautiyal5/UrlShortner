const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const controllers = require("../controllers/url");

router.post("/url", controllers.handleGenerateNewURL);

router.get("/", async (req, res) => {
	try {
		const urls = await URL.find();
		res.render("index", { urls });
	} catch (error) {
		console.error("Error fetching URLs:", error);
		res.status(500).send("An error occurred while fetching URLs");
	}
});


router.get("/:shortId", controllers.handleRedirect);

router.get("/url/analytics/:id", controllers.handleUrlAnalytics);

router.delete("/url/:id", controllers.handleDeleteURL);


module.exports = router;
